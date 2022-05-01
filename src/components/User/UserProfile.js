import UserImage from "../../../src/images/default-user.png"
import FollowerTicket from "./FollowerTicket"
import "./UserProfile.css"

const UserProfile = ({ userData, setListID }) => { 

  const handleSetListID = (event) => {
    event.preventDefault()
    setListID(event.target.value)
  }

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
          { userData.lists.map( (list) => {
            return <button key={list._id} value={list._id} onClick={handleSetListID}> { list.listName } </button>
          })}
        </div>
      </div>

      <h4>Following</h4>
      <div className="user-followers-container">
        { userData.followers.map( (follower) => {
          return < FollowerTicket key={follower._id} follower={follower} />
        })}
      </div>

  </>
  )
}
  
export default UserProfile