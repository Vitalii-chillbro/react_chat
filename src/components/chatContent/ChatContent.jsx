import React from 'react'
import './chatContent.css'

const ChatContent = () => {
    return (
        <div className='main__chatcontent'>
            <div className='chatcontent__heading'>
                Avatar+status   Name
            </div>
            <div className="chatcontent__main">
                my messages or user
            </div>
            <div className='chatcontent__footer'>
                <div className="send_wrap">
                    <input type="text" placeholder='Type your message' />
                    <button className="btnSendMsg" id="sendMsgBtn">
                        <i className="fa fa-paper-plane"></i>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ChatContent