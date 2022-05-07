import { useState, useEffect } from "react"
import UserImage from "../../../src/images/default-user.png"
import FollowerTicket from "./FollowerTicket"
import apiUtils from "../../utils/api.utils.js"
import "./UserProfile.css"
import { useNavigate, useParams } from "react-router-dom"

const UserProfile = ({ userData, setListID }) => {

  const { username } = useParams()

  const navigate = useNavigate()

  const [newListName,setNewListName] = useState("")
  const [showFollowButton, setShowFollowButton] = useState(true)
  const [followButtonType, setFollowButtonType] = useState(false)
  const [addList, setAddList] = useState(false)
  const [allowEdit, setAllowEdit] = useState(false)

  const handleSetListID = (event) => {
    event.preventDefault()
    setListID(event.target.value)
    navigate(`/me/${username}/${event.target.value}`)
  }

  const createNewList = async () => {
    try {
      const createdList = await apiUtils.createNewListOnDB({"listName": newListName})
      setListID(createdList._id)
    } catch (error) {
      throw error.response
    }
  }

  const handleCreateNewList = (event) => {
    event.preventDefault()
    createNewList()
    setNewListName("")
  }

  const handleFollow = async () => {
    try {
      await apiUtils.followUser(userData.username)
      setFollowButtonType(false)
    } catch (error) {
      throw error.response
    }
  }

  const handleUnfollow = async () => {
    try {
      await apiUtils.unfollowUser(userData.username)
      setFollowButtonType(true)
    } catch (error) {
      throw error.response
    }
  }

  const handleShowInput = () => {
    setAddList(!addList)
  }

  const verifyFollowerStatus = async () => {
    try {
      const returnedData = await apiUtils.verifyFollower()
      if (!returnedData.includes(userData._id)){
        setFollowButtonType(true)
      }
    } catch (error) {
      throw error.response
    }
  }

  const verifyEditPermission = () => {
    const localUser = localStorage.getItem('username')
    if (username === localUser) {
      setAllowEdit(!allowEdit)
      setShowFollowButton(!showFollowButton)
    }
  }

  useEffect(()=>{
    async function fetchData() {
      await verifyFollowerStatus()
    }
    fetchData()
    verifyEditPermission() 
  },[username])
  
  return (
    <>
      <div className="user-profile-container">
        <img src={UserImage} alt="default user"/>
        
        <div className="user-profile-data-header">
          <span>
            { userData.username }
            
            { showFollowButton ?
              <>
              { followButtonType ?
                <button onClick={handleFollow}>follow</button> :
                <button onClick={handleUnfollow}>unfollow</button>
              }
              </>
              : null
            }
            </span>
        </div>

        <div className="user-profile-lists">
          { userData.lists.map( (list) => {
            return <button key={list._id} value={list._id} onClick={handleSetListID}> { list.listName } </button>
          })}

          {
            allowEdit ?
            <div className="create-list">
              { 
                addList ?
                <>
                  <input placeholder="New list" type="text" onChange={(e) => setNewListName(e.target.value)} maxLength="16"/>
                  <button onClick={handleCreateNewList}>create</button>
                  <button onClick={handleShowInput}>cancel</button>
                </>
                :
                <button onClick={handleShowInput}>create new list</button>
              }
            </div>
            : null
          }

        </div>
        
        {
          userData.following.length !== 0 ?
          <>
            <h5>following</h5> 
            <div className="user-followers-container">
              { userData.following.map( (follower) => {
                return < FollowerTicket key={follower._id} follower={follower} />
              })}
            </div>
          </>
          : null
        }
      </div>
  </>
  )
}
  
export default UserProfile