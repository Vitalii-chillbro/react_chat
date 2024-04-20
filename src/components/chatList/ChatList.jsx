import React from "react";
import "./chatList.css";
import userPicture from "./img/User_0.jpg";
import checkmark from "./img/green_checkmark.png";
import ChatListUser from "./ChatListUser";
import { useState } from "react";

const ChatList = () => {
  const [searchName, setSearchName] = useState("");

  return (
    <div className="main__chatlist">
      <div className="chatlist__heading">
        <div className="chatlist-avatar__wrapper">
          <img
            alt="img"
            src={userPicture}
            width="60px"
            className="userPicture"
          />
          <img alt="img" src={checkmark} width="30px" className="checkmark" />
        </div>
        <div className="search-wrap">
          <div>
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
            <input
              type="text"
              placeholder="Search or start new chat"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
          </div>
          <button onClick={() => setSearchName("")} className="close-btn">
            X
          </button>
        </div>
      </div>
      <div className="chatlist-contacts">
        <h2 className="chatlist-title">Chats</h2>
        <ChatListUser searchName={searchName} />
      </div>
    </div>
  );
};

export default ChatList;
