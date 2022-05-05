import UserImage from "../../../src/images/default-user.png"
import { useNavigate } from "react-router-dom"
import "./UserCard.css"

const UserCard = ({ user }) => {

  const navigate = useNavigate()

  const handleProfileChange = () => {
    navigate(`/me/${user.username}`)
  }

  console.log(user)

  return (
    <>
      <div className="user-card-container" onClick={handleProfileChange} >
        <img src={UserImage} alt="default user"/>
        
        <div className="user">
          <div className="user-card-info">
            <h4>{user.username}</h4>
            <span>user description</span>
          </div>
        </div>
      </div>
    </>
  )
}
  
export default UserCard