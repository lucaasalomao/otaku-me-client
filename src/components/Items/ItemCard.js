import ItemImage from "../../../src/images/default-item.png"
import { useNavigate } from "react-router-dom"
import "./ItemCard.css"

const ItemCard = ({ item }) => {

  const navigate = useNavigate()

  const handleRequestItem = () => {
    navigate(`/me/${item.itemCreator.username}/${item.itemList}/${item._id}`)
  }

  return (
    <div className="item-card-container" onClick={handleRequestItem}>
      
      <div className="item-card-data">
        {/* <span> Item Category </span> */}
      </div>

      <img src={ItemImage} alt="default item"/>

      <div className="item-card-info">
        <h2> {item.itemName} </h2>
        <span> {item.itemComments && item.itemComments.length} Comments </span>
      </div>
    
    </div>
  )
}
  
export default ItemCard