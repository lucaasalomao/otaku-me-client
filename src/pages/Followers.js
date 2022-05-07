import { useState, useEffect } from "react"
import apiUtils from "../utils/api.utils.js"
import UserCard from '../components/User/UserCard.js'
import CommentCard from '../components/CommentCard'
import Header from "../components/Header/Header.js"
import './Followers.css'

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
      <Header />
      <div className="feed-contatiner">
        <div className="feed-comments">
          {
            commentsData.map( (comment) => {
              return <CommentCard key={comment._id} comment={comment} />
            })
          }
        </div>
      </div>
  </>
  )

}

export default Followers