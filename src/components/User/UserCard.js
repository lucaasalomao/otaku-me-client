import UserImage from "../../../src/images/default-user.png"
import { useNavigate } from "react-router-dom"

import "./UserCard.css"

const UserCard = ({ user }) => {

  const navigate = useNavigate()

  const handleProfileChange = () => {
    navigate(`/me/iser/${user._id}`)
  }

  return (
    <>
      <div className="user-card-container" onClick={handleProfileChange} >
        <img src={UserImage} alt="default user image"/>
        
        <div className="user">
          <div className="user-card-info">
            <h4>{user.email}</h4>
            <span>{user.email}</span>
          </div>

          <div className="user-card-data">
            <span>{user.agendas}</span>
            <span>{user.friends}</span>
            <span>{user.events}</span>
          </div>
        </div>
      </div>
    </>
  )
}
  
export default UserCard