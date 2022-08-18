import React from 'react'
import './myMessage.css'

const MyMessage = (props) => {
    const {message} = props
    return (
        <div className='mymessage_wrap'>
            <div className='mymessage'>
             {message.title}
            </div>
            <span className='mymessage_time'>4/22/17, 4:10 AM</span>
        </div>
    )
}

export default MyMessage