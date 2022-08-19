import React from "react";
import { user } from "../contacts/user";
import ChatListItem from "./ChatListItem";

const ChatListUser = ({ searchName }) => {
  return (
    <div className="chatlist_items">
      {user
        .filter((userInfo) => userInfo.name.toLowerCase().includes(searchName))
        .map((userInfo) => (
          <ChatListItem key={userInfo.id} userInfo={userInfo} />
        ))}
    </div>
  );
};

export default ChatListUser;
