import React from 'react'
import { users } from '../contacts/users'
import './userProfile.css'

function UserProfile() {
    return (
        <div className='chatcontent__heading_container'>
            <div className='avatar_wrap'>
                <img
                    src={users[1].image}
                    alt="img"
                    style={{ width: "50px", borderRadius: "50%" }} />
            </div>
            <div className='user_title'>{users[1].name}</div>
        </div>
    )
}

export default UserProfile