import React, { useState } from 'react'
import MyMessage from '../UI/MyMessage'
import UserMessage from '../UI/UserMessage'
import './chatContent.css'

const ChatContent = () => {

    //MyMessage

    const [messages, setMessages] = useState([{ title: "I'm having breakfast righ now, can't you wait for 10 minutes?" }])

    const [title, setTitle] = useState('')

    const addNewPost = () => {
        const newMessage = {
            title
        }
        setMessages([...messages, newMessage])
        setTitle('')
    }

    //UserMessage
    const url = 'https://api.chucknorris.io/jokes/random';
    
    const [answers, setAnswers] = useState([])

    const callAnswer = () => {
        setTimeout(() => {
            fetch(url)
            .then((res) => res.json())
            .then((data) => setAnswers(cur => [...cur, data]));
        }, 10000)
      };

    return (
        <div className='main__chatcontent'>
            <div className='chatcontent__heading'>
                Avatar+status   Name
            </div>
            <div className="chatcontent__main" >
                {answers.map((answer) => (
                    <UserMessage answer={answer} key={Math.random()} />
                ))}
                {messages.map((message) => (
                    <MyMessage message={message} title={title} key={Math.random()}  />
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
                        onClick={() => {callAnswer(); addNewPost()}}
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