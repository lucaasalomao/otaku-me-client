import Header from "../../components/Header/Header.js"
import UserCard from '../../components/User/UserCard.js'
import ListCard from '../../components/Lists/ListCard.js'
import ItemCard from '../../components/Items/ItemCard.js'
import apiUtils from "../../utils/api.utils.js"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import "./Search.css"

function Search(){

  const { type } = useParams()
  const { text } = useParams()

  const [searchedData, setSearchedData] = useState([])

  const getAllElementsByType = async () => {
    try {
      const returnedData = await apiUtils.getAllByTypeFromDB(type)
      return returnedData
    } catch (error) {
      throw error.response
    }
  }

  const getAllElementsByTypeAndText = async () => {
    try {
      const returnedData = await apiUtils.getAllByTypeAndTextFromDB(type,text)
      return returnedData
    } catch (error) {
      throw error.response
    }
  }

  const getSearchedData = async () => {
    if (text) {
      const returnedData = await getAllElementsByTypeAndText(type,text)
      setSearchedData(returnedData)
    } else {
      const returnedData = await getAllElementsByType(type)
      setSearchedData(returnedData)
    }
  }

  useEffect(()=>{
    async function fetchData() {
      await getSearchedData()
    }
    fetchData()
  },[text, type])
    
  return (
    <>
      <Header/>

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