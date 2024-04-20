import React from "react";
import { users } from "../contacts/users";
import "./userProfile.css";

function UserProfile({ userId }) {
  const currentUser = users.find((user) => user.id === parseInt(userId));

  if (!currentUser) {
    return null;
  }
  return (
    <div className="chatcontent__heading_container">
      <div className="avatar_wrap">
        <img
          src={currentUser.image}
          alt="img"
          style={{ width: "50px", borderRadius: "50%" }}
        />
      </div>
      <div className="user_title">{currentUser.name}</div>
    </div>
  );
}

export default UserProfile;
