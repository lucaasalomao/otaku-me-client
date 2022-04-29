import Header from "../../components/Header/Header.js"
import UserProfile from '../../components/User/UserProfile'
import ListCard from '../../components/Lists/ListCard'
import ItemCard from '../../components/Items/ItemCard'

import "./Profile.css"

function Profile({ setUserProfile, setSearchedData, setRequestedListCard, setRequestedItemCard }) {

  return (
    <>
      <Header setSearchedData={setSearchedData}/>

      <div className="profile-container">
        
        <div className="profile-left-container">
          <UserProfile setUserProfile={setUserProfile}/>
        </div>

        <div className="profile-right-container">
          <ItemCard setRequestedItemCard={setRequestedItemCard}/>
          <ListCard setRequestedListCard={setRequestedListCard}/>
          <ListCard setRequestedListCard={setRequestedListCard}/>        
          <ItemCard setRequestedItemCard={setRequestedItemCard}/>
          <ItemCard setRequestedItemCard={setRequestedItemCard}/>
        </div>
      </div>
    </>
  )
  }
  
  export default Profile