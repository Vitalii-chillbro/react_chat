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
          <div style={{ display: showChatContent ? "none" : "flex" }}>
            <ChatList
              clickHandler={handleChatListClick}
              showChatContent={showChatContent}
            />
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
