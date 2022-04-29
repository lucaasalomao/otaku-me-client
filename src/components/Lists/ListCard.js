import ListImage from "../../../src/images/default-list.png"
import { useNavigate } from "react-router-dom"
import "./ListCard.css"

const ListCard = ({ setRequestedListCard }) => {

  const navigate = useNavigate()

  const handleRequestList = () => {
    setRequestedListCard("list do card")
    navigate("/me/profile")
  }

  return (
    <div className="list-card-container" onClick={handleRequestList}>
      
      <div className="list-card-data">
{/*           <span>10 Lists</span>
        <span>20 Followers</span>
        <span>30 Animes</span> */}
      </div>

      <img src={ListImage} alt="default list image"/>

      <div className="list-card-info">
        <h2> List Name </h2>
        <span> 20 Items </span>
      </div>
    
    </div>
  )
}
  
export default ListCard