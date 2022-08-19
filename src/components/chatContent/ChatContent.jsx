import React, { useState } from "react";
import { user } from "../contacts/user";

import Message from "../UI/Message";
import "./chatContent.css";

const ChatContent = () => {
  //MyMessage

  const [messages, setMessages] = useState([
    {
      value: "I'm having breakfast righ now, can't you wait for 10 minutes?",
      isAnswer: false,
      created_at: new Date(),
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const addNewPost = () => {
    setMessages([
      ...messages,
      { value: newMessage, created_at: new Date(), isAnswer: false },
    ]);
    setNewMessage("");
  };

  console.log(messages);

  //UserMessage
  const url = "https://api.chucknorris.io/jokes/random";

  const callAnswer = () => {
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) =>
          setMessages((cur) => [
            ...cur,
            { ...data, isAnswer: true, created_at: new Date() },
          ])
        );
    }, 1000);
  };

  return (
    <div className="main__chatcontent">
      <div className="chatcontent__heading">Avatar+status Name</div>
      <div className="chatcontent__main">
        {messages.map(({ value, created_at, isAnswer }) => (
          <Message
            value={value}
            key={created_at}
            created_at={created_at}
            isAnswer={isAnswer}
            imageUrl={user.image}
          />
        ))}
      </div>
      <div className="chatcontent__footer">
        <div className="send_wrap">
          <input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            type="text"
            placeholder="Type your message"
          />
          <button
            className="btnSendMsg"
            id="sendMsgBtn"
            onClick={() => {
              callAnswer();
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
