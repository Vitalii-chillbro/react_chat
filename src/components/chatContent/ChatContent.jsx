import React, { useState } from 'react'
import MyMessage from '../UI/MyMessage'
import UserMessage from '../UI/UserMessage'
import './chatContent.css'

const ChatContent = () => {
    const [posts, setPosts] = useState([{ title: "I'm having breakfast righ now, can't you wait for 10 minutes?" }])

    const [title, setTitle] = useState('')

    const addNewPost = () => {
        const newPost = {
            title
        }
        setPosts([...posts, newPost])
        setTitle('')
    }

    return (
        <div className='main__chatcontent'>
            <div className='chatcontent__heading'>
                Avatar+status   Name
            </div>
            <div className="chatcontent__main">
                <UserMessage />
                {posts.map((post) => (
                    <MyMessage post={post} title={title}  />
                ))}
              
            </div>
            <div className='chatcontent__footer'>
                <div className="send_wrap">
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        placeholder='Type your message'
                    />
                    <button
                        className="btnSendMsg"
                        id="sendMsgBtn"
                        onClick={addNewPost}
                        disabled={!title}
                    >
                        <i className="fa fa-paper-plane"></i>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ChatContent