import React from 'react'
import './userMessage.css'

const UserMessage = (props) => {
  return (
    <div className='usermessage_wrap'>
    <div className='usermessage'>
        {props.answer.value}
        </div>
        <span className='usermessage_time'>4/22/17, 4:15 AM</span>
        </div>
  )
}

export default UserMessage