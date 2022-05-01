import UserImage from "../../../src/images/default-user.png"
import { useNavigate } from "react-router-dom"
import "./FollowerTicket.css"

const FollowerTicket = ({ follower }) => {

  const navigate = useNavigate()

  const handleProfileChange = () => {
    navigate(`/me/user/${follower}`)
  }

  return (
    <>
      <div className="user-ticket-container" onClick={handleProfileChange}>
        <img src={UserImage} alt="default user image"/>
        <h4>username</h4>
      </div>
    </>
  )
}
  
export default FollowerTicket