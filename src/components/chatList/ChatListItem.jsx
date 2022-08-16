import React from 'react'
import './chatListItem.css'

const ChatListItem = (props) => {
    return (
        <div className='chatlist_items_wrap'>
            <div className='chatlist_avname_wrap'>
                <img className='chatlist_items_avatar' src={props.userInfo.image} alt='img' />
                <span className='chatlist_items_name'>{props.userInfo.name} <br /> 
                <span className='chatlist_items_message'>{props.userInfo.message}</span>
                </span>
            </div>
            <span className='chatlist_items_data'>{props.userInfo.data}</span>
        </div>
    )
}

export default ChatListItem