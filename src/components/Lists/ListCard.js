import ListImage from "../../../src/images/default-list.png"
import "./ListCard.css"

const ListCard = () => {
    return (
      <div className="list-card-container">
        
        <div className="list-card-data">
          <span>10 Lists</span>
          <span>20 Followers</span>
          <span>30 Animes</span>
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