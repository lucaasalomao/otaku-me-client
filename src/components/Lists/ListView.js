import CommentCard from '../CommentCard'
import ListImage from "../../../src/images/default-list.png"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ListView = ({ listData }) => {

  const { item } = useParams()

  const [commentsList, setCommentsList] = useState([])

  const filterCommentsByItemID = (itemID) => {
    const selectedComments = listData.listComments.filter((comment)=>{
      return comment.commentOnItem === itemID
    })
    setCommentsList(selectedComments)
  }

  const handleSetItemID = (event) => {
    event.preventDefault()
    const selectedItem = event.target.value
    filterCommentsByItemID(selectedItem)
  }

  const handleResetItemID = () => {
    setCommentsList([...listData.listComments])
  }

  useEffect(()=>{
    if (item) {
      filterCommentsByItemID(item)
    } else {
      setCommentsList([...listData.listComments])
    }
  },[listData])

  return (
    <>
      <img src={ListImage} alt="default list"/>
      
      <div>{listData.listName}</div>

      <button onClick={handleResetItemID}>bring all</button>

      <div>
        {listData.listItems.map( (item) => {
          return <button key={item._id} value={item._id} onClick={handleSetItemID}> {item.itemName} </button>
        })}
      </div>

      {
        commentsList.length !== 0 &&
        commentsList.map( (comment) => {
          return <CommentCard key={comment._id} comment={comment} />
        })
      }

    </>
  )
}
  
export default ListView