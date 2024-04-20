import React from "react";
import "./chatListItem.css";

const ChatListItem = ({ userInfo }) => {
  return (
    <div className="chatlist-items_wrap">
      <div className="chatlist-avname_wrap">
        <img className="chatlist-items_avatar" src={userInfo.image} alt="img" />
        <span className="chatlist-items_name">
          {userInfo.name} <br />
          <span className="chatlist-items_message">{userInfo.message}</span>
        </span>
      </div>
      <span className="chatlist-items_data">{userInfo.date}</span>
    </div>
  );
};

export default ChatListItem;
