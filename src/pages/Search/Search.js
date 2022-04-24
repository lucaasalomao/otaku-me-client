import Header from "../../components/Header/Header.js"

import UserCard from '../../components/User/UserCard'
import ListCard from '../../components/Lists/ListCard'

import "./Search.css"

function Search() {
    return (
      <>
        <Header/>

        <div className="search-container">
          <UserCard/>
          <UserCard/>
          <UserCard/>
          <UserCard/>
          <UserCard/>
          <UserCard/>
          <UserCard/>
          <UserCard/>
          <UserCard/>
          <ListCard/>
          <ListCard/>
          <ListCard/>
          <ListCard/>
          <ListCard/>
          <ListCard/>        
          <ListCard/>
        </div>
      </>
    )
  }
  
  export default Search