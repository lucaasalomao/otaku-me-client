import Header from "../../components/Header/Header.js"
import UserCard from '../../components/User/UserCard.js'
import ListCard from '../../components/Lists/ListCard.js'
import ItemCard from '../../components/Items/ItemCard.js'

import "./Search.css"

function Search({ setUserProfile, setSearchedData, setRequestedListCard, setRequestedItemCard }) {

  return (
    <>
      <Header setSearchedData={setSearchedData}/>

      <div className="search-container">
        <UserCard setUserProfile={setUserProfile}/>
        <ListCard setRequestedListCard={setRequestedListCard}/>
        <ItemCard setRequestedItemCard={setRequestedItemCard}/>
      </div>
    </>
  )
}

export default Search