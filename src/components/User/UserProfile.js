import UserImage from "../../../src/images/default-user.png"

import UserTicket from "./UserTicket"

import "./UserProfile.css"

const UserProfile = () => {
  return (
    <>
      <div className="user-profile-container">
        <img src={UserImage} alt="default user image"/>
          
        <div className="user-profile-data">
          <h4>Username</h4>
          <span>User Description</span>
        </div>

        <h4>Lists</h4>

        <div className="user-profile-lists">
          <a href="/profile">10 Lists</a>
          <a href="/profile">20 Followers</a>
          <a href="/profile">30 Animes</a>
        </div>
      </div>

      <h4>Following</h4>

      <div className="user-following-container">
        < UserTicket /> 
        < UserTicket />
        < UserTicket />
      </div>
    </>
  )
}
  
export default UserProfile