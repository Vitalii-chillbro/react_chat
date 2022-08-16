import React from 'react'
import ChatContent from '../chatContent/ChatContent'
import ChatList from '../chatList/ChatList'
import "./chatBody.css"
const ChatBody = () => {
  return (
    <div className='main__chatbody'>
        <ChatList />
        <ChatContent />
    </div>
  )
}

export default ChatBody