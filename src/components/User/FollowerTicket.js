import UserImage from "../../../src/images/default-user.png"
import { useNavigate } from "react-router-dom"
import "./FollowerTicket.css"
import apiUtils from "../../utils/api.utils.js"
import { useState, useEffect } from "react"

const FollowerTicket = ({ follower }) => {

  const navigate = useNavigate()

  const handleProfileChange = () => {
    navigate(`/me/${follower.username}`)
  }

  const [followButton, setFollowButton] = useState(false)

  const handleFollow = async () => {
    try {
      await apiUtils.followUser(follower.username)
      setFollowButton(false)
    } catch (error) {
      throw error.response
    }
  }

  const handleUnfollow = async () => {
    try {
      await apiUtils.unfollowUser(follower.username)
      setFollowButton(true)
    } catch (error) {
      throw error.response
    }
  }

  const verifyFollowerStatus = async () => {
    try {
      const returnedData = await apiUtils.verifyFollower()
      if (!returnedData.includes(follower._id)){
        setFollowButton(true)
      }
    } catch (error) {
      throw error.response
    }
  }

  useEffect(()=>{
    verifyFollowerStatus()
  },[])

  return (
    <>
    <div className="ticket-container">
      <div className="user-ticket-data" onClick={handleProfileChange} >
        <img src={UserImage} alt="default user"/>
        <span> {follower.username}</span>
      </div>

      <div className="follow-user">
        {followButton ?
          <button onClick={handleFollow}>follow</button> :
          <button onClick={handleUnfollow}>unfollow</button>
        }
      </div>
    </div>
    </>
  )
}
  
export default FollowerTicket