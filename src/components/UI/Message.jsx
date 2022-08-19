import React from "react";

import "./message.css";

const Message = ({ value, isAnswer, created_at, imageUrl }) => {
  return (
    <div
      className={`message_container ${isAnswer && "answer_message_container"}`}
    >
      {isAnswer && (
        <div className="avatar_container">
          <img
            src={"https://randomuser.me/api/portraits/women/88.jpg"}
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
