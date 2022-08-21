import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { users } from "../contacts/users";

import "./message.css";

const Message = ({ value, isAnswer, created_at, imageUrl }) => {
  const messageRef = useRef(null)

  useEffect(() => {
    messageRef.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
  })

  return (
    <div 
      className={`message_container ${isAnswer && "answer_message_container"}`}
      ref={messageRef}
    >
      {isAnswer && (
        <div className="avatar_container">
          <img
            src={users[1].image}
            className="avatar"
            alt="avatar"
          />
        </div>
      )}
      <div>
        <div className={`message ${isAnswer && "answer_message"}`}>{value}</div>
        <div className={`message_time ${isAnswer && "answer_message_time"}`}>
          {created_at?.toLocaleString("en")}
        </div>
      </div>
    </div>
  );
};

export default Message;
