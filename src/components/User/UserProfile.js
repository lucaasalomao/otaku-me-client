import { useNavigate } from "react-router-dom"
import UserImage from "../../../src/images/default-user.png"
import UserTicket from "./UserTicket"
import "./UserProfile.css"

const UserProfile = ({ setUserProfile }) => {

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
          <a href="/me/profile">10 Lists</a>
          <a href="/me/profile">20 Followers</a>
          <a href="/me/profile">30 Animes</a>
        </div>
      </div>

      <h4>Following</h4>

      <div className="user-following-container">
        < UserTicket setUserProfile={setUserProfile}/> 
      </div>
    </>
  )
}
  
export default UserProfile