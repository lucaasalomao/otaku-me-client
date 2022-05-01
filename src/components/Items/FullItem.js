import CommentCard from '../CommentCard'

const FullItem = ({ itemData }) => {
    return (
      <>
        <div>This is FullItem</div>
        <div>{itemData.itemName}</div>
        < CommentCard />
      </>
    )
  }
  
  export default FullItem