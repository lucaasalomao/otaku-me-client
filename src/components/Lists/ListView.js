import CommentCard from '../CommentCard'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import apiUtils from "../../utils/api.utils.js"
import './ListView.css'
import ItemImage from "../../../src/images/default-item.png"

const ListView = ({ listData, setListID }) => {

  const navigate = useNavigate()

  const { item } = useParams()
  const { username } = useParams()

  const [commentsList, setCommentsList] = useState([])
  const [selectedItem, setSelectedItem] = useState([])
  const [newItemName,setNewItemName] = useState("")
  const [newComment,setNewComment] = useState("")
  const [addItem, setAddItem] = useState(false)
  const [addComment, setAddComment] = useState(false)
  const [allowEdit, setAllowEdit] = useState(false)
  const [newItemID,setNewItemID] = useState("")

  const filterCommentsByItemID = (itemID) => {
    const selectedComments = listData.listComments.filter((comment)=>{
      return comment.commentOnItem === itemID
    })
    setCommentsList(selectedComments)
  }

  const handleSetItemID = (event) => {
    event.preventDefault()
    setSelectedItem(event.target.value)
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
    verifyEditPermission()
  },[listData])

  const createNewItem = async () => {
    try {
      const returnedItem = await apiUtils.createNewItemOnDB(listData._id,{"itemName": newItemName})
      setNewItemID(returnedItem._id)
    } catch (error) {
      throw error.response
    }
  }

  const handleCreateNewItem = (event) => {
    event.preventDefault()
    createNewItem()
    setNewItemName("")
    handleShowAddItemInput()
  }

  const createNewComment = async () => {
    try {
      await apiUtils.createNewCommentInItem(listData._id, selectedItem ,{"commentText": newComment})
    } catch (error) {
      throw error.response
    }
  }

  const handleCreateNewComment = (event) => {
    event.preventDefault()
    createNewComment()
    setNewComment("")
    handleShowAddCommentInput()
  }

  const handleShowAddItemInput = () => {
    setAddItem(!addItem)
  }

  const handleShowAddCommentInput = () => {
    setAddComment(!addComment)
  }

  const verifyEditPermission = () => {
    const localUser = localStorage.getItem('username')
    if (username === localUser) {
      setAllowEdit(!allowEdit)
    }
  }

  return (
    <>
      <div className='list-container'>
{/*         <button onClick={handleResetItemID}>bring all</button> */}
        <div className='items'>
          
          {listData.listItems.map( (item) => {
            return (
              <>
                <div className='item'>
                  <img src={ItemImage} alt="default item"/>
                  <button key={item._id} value={item._id} onClick={handleSetItemID}> {item.itemName} </button>
                </div>
              </>
            )
          })}

        </div>

        {
          allowEdit ?
          <div className="create-item">
              { 
                addItem ?
                <>
                  <input placeholder="New item" type="text" onChange={(e) => setNewItemName(e.target.value)}/>
                  <button onClick={handleCreateNewItem}>create</button>
                  <button onClick={handleShowAddItemInput}>cancel</button>
                </>
                :
                <button onClick={handleShowAddItemInput}>Create new item</button>
              }
          </div>
          :null
        }
      </div>
      
      <div className='comment-container'>
        <div className='create-comment'>
          { 
            addComment ?
            <>
              <input placeholder="New comment" type="text" onChange={(e) => setNewComment(e.target.value)}/>
              <button onClick={handleCreateNewComment}>comment</button>
              <button onClick={handleShowAddCommentInput}>cancel</button>
            </>
            :
            <button onClick={handleShowAddCommentInput}>Comment</button>
          }
        </div>
        <div className='comment-list'>
          {
            commentsList.length !== 0 &&
            commentsList.map( (comment) => {
              return <CommentCard key={comment._id} comment={comment} />
            })
          }
        </div>
      </div>

    </>
  )
}
  
export default ListView