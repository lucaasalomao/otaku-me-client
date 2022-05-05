import { useState, useEffect } from "react"
import apiUtils from "../utils/api.utils.js"
import UserCard from '../components/User/UserCard.js'
import CommentCard from '../components/CommentCard'

function Followers(){

  const [commentsData, setCommentsData] = useState([])
  const [followersData, setFollowersData] = useState([])

  const getActivityData = async () => {
    const { comments, followers } = await apiUtils.getUserFollowersInfoFromDB()
    setCommentsData(comments)
    setFollowersData(followers)
  }

  useEffect(()=>{
    async function fetchData() {
      await getActivityData()
    }
    fetchData()
  },[])

  return (
    <>
      <div className="search-container">
        {followersData.map((user)=>{
          return <UserCard key={user._id} user={user}/>  
        })}
      </div>

      {
        commentsData.map( (comment) => {
          return <CommentCard key={comment._id} comment={comment} />
        })
      }
  </>
  )

}

export default Followers