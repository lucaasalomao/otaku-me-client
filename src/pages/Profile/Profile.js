import Header from "../../components/Header/Header.js"
import UserProfile from '../../components/User/UserProfile'
import ListCard from '../../components/Lists/ListCard'
import ItemCard from '../../components/Items/ItemCard'

import "./Profile.css"

function Profile() {
    return (
      <>
        <Header/>

        <div className="profile-container">
          
          <div className="profile-left-container">
            <UserProfile/>
          </div>

          <div className="profile-right-container">
            <ListCard/>
            <ListCard/>
            <ListCard/>        
            <ItemCard/>
            <ListCard/>        
            <ItemCard/>
            <ListCard/>        
            <ItemCard/>
            <ListCard/>        
            <ItemCard/>
          </div>
        </div>
      </>
    )
  }
  
  export default Profile