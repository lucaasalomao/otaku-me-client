import Header from "../components/Header/Header.js"

import UserProfile from '../components/User/UserProfile'

import FullList from '../components/Lists/FullList'
import ListCard from '../components/Lists/ListCard'

import FullItem from '../components/Items/FullItem'
import ItemCard from '../components/Items/ItemCard'

function Profile() {
    return (
      <>
        <Header/>
        
        <UserProfile/>

        <FullList/>
        <ListCard/>        

        <FullItem/>
        <ItemCard/>
      </>
    )
  }
  
  export default Profile