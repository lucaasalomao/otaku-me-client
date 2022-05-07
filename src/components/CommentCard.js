import './CommentCard.css'
import UserImage from "../../src/images/default-user.png"
import apiUtils from '../utils/api.utils'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

const CommentCard = ({ comment }) => {

  const [allowDeletion, setAllowDeletion] = useState(false)

  const navigate = useNavigate()

  const requestDeletion = async () => {
    try {
      await apiUtils.deleteComment(comment._id)
    } catch (error) {
      throw error
    }
  }

  useEffect(()=>{
    const localUser = localStorage.getItem('username')
    if (comment.commentCreator.username === localUser) {
      setAllowDeletion(!allowDeletion)
    }
  })

  const handleNavigateToUser = async () => {
    navigate(`/me/${comment.commentCreator.username}`)
  }

  return (
    <>
      <div className="comment-card" onClick={handleNavigateToUser}>
        <img src={UserImage} alt="default user"/>
        <span>{comment.commentCreator.username}</span>
        <span>{comment.commentText}</span>
        {
          allowDeletion ? 
          <button onClick={requestDeletion}>delete</button>
          : null
        }
      </div>
    </>
  )
}

export default CommentCard