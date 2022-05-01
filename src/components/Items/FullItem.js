import CommentCard from '../CommentCard'

const FullItem = ({ item }) => {
    return (
      <>
        <div>This is FullItem</div>
        <div>{item.eventName}</div>
        < CommentCard />
      </>
    )
  }
  
  export default FullItem