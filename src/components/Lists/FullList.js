import CommentCard from '../CommentCard'

const FullList = ({ list }) => {
    return (
      <>
        <div>This is FullList</div>
        <div>{list.agendaName}</div>
        < CommentCard />
      </>
    )
  }
  
  export default FullList