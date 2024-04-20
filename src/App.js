import React from "react";
import "./App.css";
import ChatBody from "./components/chatBody/ChatBody";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<ChatBody />} />
          <Route path="/users/:userId/messages" element={<ChatBody />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
