import UserImage from "../../../src/images/default-user.png"

import "./UserTicket.css"

const UserTicket = () => {
  return (
    <>
      <div className="user-ticket-container">
        <img src={UserImage} alt="default user image"/>
        <h4>Username</h4>
      </div>
    </>
  )
}
  
export default UserTicket