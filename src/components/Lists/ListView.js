import CommentCard from '../CommentCard'
import ListImage from "../../../src/images/default-list.png"

const ListView = ({ listData }) => {

  console.log(listData)

  return (
    <>
      <img src={ListImage} alt="default list image"/>
      
      <div>{listData.listName}</div>

      {listData.listItems.map((item)=>{
        return <div key={item._id}>{item.itemName}</div>
      })}

      {listData.listComments.map((comment)=>{
        return <CommentCard key={comment._id} comment={comment} />
      })}

    </>
  )
}
  
export default ListView