import UserImage from "../../../src/images/default-user.png"

import "./UserCard.css"

const UserCard = () => {
  return (
    <>
      <div className="user-card-container">
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