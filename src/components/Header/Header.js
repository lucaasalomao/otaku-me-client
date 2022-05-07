import HomeIcon from "../../../src/images/home.svg"
import FeedIcon from "../../../src/images/feed.svg"
import LogoutIcon from "../../../src/images/logout.svg"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import otakuImage from "../../images/otaku.svg"

import "./Header.css"

const Header = () => {

  const username = localStorage.getItem('username')

  const navigate = useNavigate()

  const [text,setText] = useState("")
  const [type,setType] = useState("user")

  const handleSearch = (event) => {
    event.preventDefault()
    if (text) {
      navigate(`/me/search/${type}/${text}`)
    } else {
      navigate(`/me/search/${type}/all`) 
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    navigate("/")
  }

  const handleFollowers = () => {
    navigate(`/me/${username}/followers`)
  }

  const handleHome = () => {
    navigate(`/me/${username}`)
  }

  return (
    <>
      {
        <div className="header-container">
          <div className="left-container">
            <img src={otakuImage} alt="otaku" onClick={handleHome}/>
            <input placeholder="Search" type="search" onChange={(e) => setText(e.target.value)}/>
            <select onChange={(e) => setType(e.target.value)}>
              <option value="user" defaultValue>Users</option>
              <option value="list">Lists</option> 
              <option value="item">Items</option>
            </select>
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="right-container">
            <img src={HomeIcon} alt="my profile" onClick={handleHome}/>
            <img src={FeedIcon} alt="followers feed" onClick={handleFollowers}/>
            <img src={LogoutIcon} alt="logout" onClick={handleLogout}/>
          </div>
        </div>
      }
    </>
  )
  }
  
  export default Header