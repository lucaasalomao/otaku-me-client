import ItemImage from "../../../src/images/default-item.png"
import "./ItemCard.css"

const ItemCard = () => {
    return (
      <div className="item-card-container">
        
        <div className="item-card-data">
          <span> Item Category </span>
        </div>

        <img src={ItemImage} alt="default item image"/>

        <div className="item-card-info">
          <h2> Item Name </h2>
          <span> 20 Likes </span>
        </div>
      
      </div>
    )
  }
  
  export default ItemCard