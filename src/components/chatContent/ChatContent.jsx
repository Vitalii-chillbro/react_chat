import React, { useEffect, useState } from "react";
import { users } from "../contacts/users";

import Message from "../UI/Message";
import UserProfile from "../UI/UserProfile";
import "./chatContent.css";
import { Link, useParams } from "react-router-dom";

const ChatContent = ({ showChatContent, setShowChatContent }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [timerId, setTimerId] = useState(null);

  const { userId } = useParams();

  useEffect(() => {
    if (userId) {
      const storedMessages =
        JSON.parse(localStorage.getItem(`user_${userId}_messages`)) || [];
      if (storedMessages.length > 0) {
        setMessages(storedMessages);
      } else {
        const user = users.find((user) => user.id === Number(userId));
        if (user) {
          setMessages([
            { value: user.message, created_at: user.date, isAnswer: true },
          ]);
        }
      }
    }
  }, [userId]);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(`user_${userId}_messages`, JSON.stringify(messages));
    }
  }, [messages, userId]);

  const addNewPost = () => {
    if (newMessage.trim() !== "") {
      setMessages([
        ...messages,
        { value: newMessage, created_at: new Date(), isAnswer: false },
      ]);
      setNewMessage("");
      callAnswer();
    }
  };

  const callAnswer = () => {
    const id = setTimeout(() => {
      fetch("https://api.chucknorris.io/jokes/random")
        .then((res) => res.json())
        .then((data) =>
          setMessages((cur) => [
            ...cur,
            { ...data, isAnswer: true, created_at: new Date() },
          ])
        );
    }, 3000);
    setTimerId(id);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerId);
    };
  }, [userId, timerId]);

  return (
    <div className="main__chatcontent">
      <div className="chatcontent__heading">
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          onClick={() => (!showChatContent ? null : setShowChatContent(false))}
        >
          <button>&larr;</button>
        </Link>

        <UserProfile userId={userId} />
      </div>
      <div className="chatcontent__main">
        {messages.map(({ value, created_at, isAnswer }, index) => (
          <Message
            value={value}
            key={`${userId}-${index}`}
            created_at={created_at}
            isAnswer={isAnswer}
            imageUrl={users.find((user) => user.id === Number(userId))?.image}
          />
        ))}
      </div>
      <div className="chatcontent__footer">
        <div className="send_wrap">
          <input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addNewPost();
              }
            }}
            type="text"
            placeholder="Type your message"
          />
          <button
            className="btnSendMsg"
            id="sendMsgBtn"
            onClick={() => {
              addNewPost();
            }}
            disabled={!newMessage}
          >
            <i className="fa fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatContent;
