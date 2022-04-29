import UserImage from "../../../src/images/default-user.png"
import { useNavigate } from "react-router-dom"

import "./UserCard.css"

const UserCard = ({ setUserProfile }) => {

  const navigate = useNavigate()

  const handleProfileChange = () => {
    setUserProfile("Lucas do card")
    navigate("/me/profile")
  }

  return (
    <>
      <div className="user-card-container" onClick={handleProfileChange} >
        <img src={UserImage} alt="default user image"/>
        
        <div className="user">
          <div className="user-card-info">
            <h4>Username</h4>
            <span>User Description</span>
          </div>

          <div className="user-card-data">
            <span>10 Lists</span>
            <span>20 Followers</span>
            <span>30 Animes</span>
          </div>
        </div>
      </div>
    </>
  )
}
  
export default UserCard