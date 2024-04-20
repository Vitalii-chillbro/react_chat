import React, { useState } from "react";
import ChatContent from "../chatContent/ChatContent";
import ChatList from "../chatList/ChatList";
import "./chatBody.css";

const ChatBody = () => {
  const [showChatContent, setShowChatContent] = useState(false);

  const handleChatListClick = () => {
    setShowChatContent(true);
  };

  return (
    <div className="main__chatbody">
      {window.innerWidth <= 699 ? (
        <>
          <div
            onClick={handleChatListClick}
            style={{ display: showChatContent ? "none" : "flex" }}
          >
            <ChatList />
          </div>
          <div style={{ display: showChatContent ? "flex" : "none" }}>
            <ChatContent
              showChatContent={showChatContent}
              setShowChatContent={setShowChatContent}
            />
          </div>
        </>
      ) : (
        <>
          <ChatList />
          <ChatContent />
        </>
      )}
    </div>
  );
};

export default ChatBody;
