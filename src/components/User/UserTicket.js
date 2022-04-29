import UserImage from "../../../src/images/default-user.png"
import { useNavigate } from "react-router-dom"
import "./UserTicket.css"

const UserTicket = ({ setUserProfile }) => {

  const navigate = useNavigate()

  const handleProfileChange = () => {
    setUserProfile("Lucas do ticket")
    navigate("/me/profile")
  }

  return (
    <>
      <div className="user-ticket-container" onClick={handleProfileChange}>
        <img src={UserImage} alt="default user image"/>
        <h4>Username</h4>
      </div>
    </>
  )
}
  
export default UserTicket