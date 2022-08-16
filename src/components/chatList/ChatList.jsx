import React from 'react'
import "./chatList.css";
import userPicture from './img/User_0.jpg';
import checkmark from './img/green_checkmark.png';
import ChatListUser from './ChatListUser';

const ChatList = () => {
    return (
        <div className='main__chatlist'>
            <div className="chatlist__heading">
                <div className='chatlist-avatar__wrapper'>
                    <img alt='img' src={userPicture} width="60px" className='userPicture' />
                    <img alt='img' src={checkmark} width="30px" className='checkmark' />
                </div>
                <div className="chatlist_search">
                    <div className="search_wrap">
                        <button className='search-btn'>
                            <i className='fa fa-search'></i>
                        </button>
                        <input type="text" placeholder='Search or start new chat' required />
                    </div>
                </div>
            </div>
            <div className='chatlist_contacts'>
                <h2 className='chatlist_title'>Chats</h2>
                <ChatListUser />
            </div>
        </div>
    )
}

export default ChatList