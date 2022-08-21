import React from "react";
import { users } from "../contacts/users";
import ChatListItem from "./ChatListItem";

const ChatListUser = ({ searchName }) => {
  return (
    <div className="chatlist_items">
      {users
        .filter((userInfo) => userInfo.name.toLowerCase().includes(searchName))
        .map((userInfo) => (
          <ChatListItem key={userInfo.id} userInfo={userInfo} />
        ))}
    </div>
  );
};

export default ChatListUser;
