import HomeIcon from "../../../src/images/home-icon.png"
import FollowersIcon from "../../../src/images/followers-icon.png"
import LogoutIcon from "../../../src/images/logout-icon.png"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "./Header.css"

const Header = ({ setSearchedData }) => {

  const navigate = useNavigate()

  const [text,setText] = useState("")
  const [type,setType] = useState("items")

  const getAllElementsByTypeFromDB = async (selectedType, selectedText) => {
/*     try {
      let returnedData = await api.getAllItemsFromDB()
      setText("")
      return returnedData
    } catch (error) {
      throw error.response
    } */
    setSearchedData(selectedText)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate("/")
  }

  const handleSearch = () => {
    getAllElementsByTypeFromDB(type,text)
    setText("")
    navigate("/me/search")
  }

  const handleFollowers = () => {
    navigate("/me/followers")
  }

  const handleHome = () => {
    navigate("/me/profile")
  }

  return (
    <>
      <div className="header-container">

        <div className="left-container">

          <a onClick={handleHome}> Otaku Me </a>

          <input placeholder="Search" type="search" value={text} onChange={(e) => setText(e.target.value)}/>
          <select name="filter" id="filter" onChange={(e) => setType(e.target.value)}>
            <option value={type}>Items</option>
            <option value="lists">Lists</option>  
            <option value="users">Users</option>
          </select>
          <button onClick={handleSearch}>Search</button>

        </div>

        <div className="right-container">

          <a onClick={handleHome}>
            <img src={HomeIcon} alt="default home image"/>   
            <span>Home</span>
          </a>

          <a onClick={handleFollowers}>
            <img src={FollowersIcon} alt="default followers image"/>
            <span>Followers</span>
          </a>
          
          <a onClick={handleLogout}>
            <img src={LogoutIcon} alt="default logout image"/>
            <span>Logout</span>
          </a>
          
        </div>

      </div>
    </>
  )
  }
  
  export default Header