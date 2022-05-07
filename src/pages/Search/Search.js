import UserCard from '../../components/User/UserCard.js'
import ListCard from '../../components/Lists/ListCard.js'
import ItemCard from '../../components/Items/ItemCard.js'
import Header from "../../components/Header/Header.js"
import "./Search.css"
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import apiUtils from "../../utils/api.utils.js"

function Search(){

  const [searchedData, setSearchedData] = useState([])

  const { text } = useParams()
  const { type } = useParams()

  const getRequestedData = async (selectedType,selectedText) => {
    if (selectedText) {
      const returnedData = await apiUtils.getAllByTypeAndTextFromDB(selectedType,selectedText)
      setSearchedData(returnedData)
    } else {
      const returnedData = await apiUtils.getAllByTypeFromDB(selectedType)
      setSearchedData(returnedData)
    }
  }

  useEffect(() =>{
    async function fetchData() {
      await getRequestedData(type,text)
    }
    fetchData()
  },[type,text])

    
  return (
    <>
      <Header />
      {searchedData &&
        <div className="search-container">

          {type === "user" && searchedData.map((user)=>{
            return <UserCard key={user._id} user={user}/>  
          })}

          {type === "list" && searchedData.map((list)=>{
            return <ListCard key={list._id} list={list}/>  
          })}
          
          {type === "item" && searchedData.map((item)=>{
            return <ItemCard key={item._id} item={item}/>  
          })}

        </div>
      }
    </>
  )
}

export default Search