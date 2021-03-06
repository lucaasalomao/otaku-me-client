import ListImage from "../../../src/images/default-list.png"
import { useNavigate } from "react-router-dom"
import "./ListCard.css"

const ListCard = ({ list }) => {

  const navigate = useNavigate()

  const handleRequestList = () => {
    navigate(`/me/${list.listCreator.username}/${list._id}`)
  }

  return (
    <div className="list-card-container" onClick={handleRequestList}>
      
      <div className="list-card-data">
{/*           <span>10 Lists</span>
        <span>20 Followers</span>
        <span>30 Animes</span> */}
      </div>

      <img src={ListImage} alt="default list"/>

      <div className="list-card-info">
        <h2> {list.listName} </h2>
        <span> {list.listItems && list.listItems.length} Items </span>
      </div>
    
    </div>
  )
}
  
export default ListCard