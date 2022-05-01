import UserImage from "../../../src/images/default-user.png"
import FollowerTicket from "./FollowerTicket"
import "./UserProfile.css"

const UserProfile = ({ userData }) => {

  return (
    <>
      <div className="user-profile-container">
        <img src={UserImage} alt="default user image"/>
          
        <div className="user-profile-data">
          <h4>{ userData.email }</h4>
          <span>User Description</span>
        </div>

        <h4>Lists</h4>

        <div className="user-profile-lists">
          { userData.agendas.map( (list) => {
            <div> { list } </div>
          })}
        </div>
      </div>

      <h4>Following</h4>

      <div className="user-following-container">
        { userData.friends.map( (follower) => {
            < FollowerTicket follower={follower} />
        })}
      </div>
    </>
  )
}
  
export default UserProfile