import React from "react";
import { users } from "../contacts/users";
import ChatListItem from "./ChatListItem";
import { Link } from "react-router-dom";
import "./chatListItem.css";

const ChatListUser = ({ searchName }) => {
  return (
    <div className="chatlist-items">
      {users
        .filter((userInfo) =>
          userInfo.name.toLowerCase().includes(searchName.toLowerCase())
        )
        .map((userInfo) => (
          <Link
            to={`/users/${userInfo.id}/messages`}
            key={userInfo.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ChatListItem userInfo={userInfo} />
          </Link>
        ))}
    </div>
  );
};

export default ChatListUser;
