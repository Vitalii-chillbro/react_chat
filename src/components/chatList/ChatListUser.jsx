import React from 'react'
import { user } from '../contacts/user'
import ChatListItem from './ChatListItem'

const ChatListUser = () => {
    return (
        <div className='chatlist_items'>
            {user.map(userInfo => <ChatListItem key={userInfo.id} userInfo={userInfo} />)}
        </div>
    )
}

export default ChatListUser