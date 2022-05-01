import HomeIcon from "../../../src/images/home-icon.png"
import FollowersIcon from "../../../src/images/followers-icon.png"
import LogoutIcon from "../../../src/images/logout-icon.png"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "./Header.css"

const Header = () => {

  const navigate = useNavigate()

  const [text,setText] = useState("")
  const [type,setType] = useState("list")

  const handleSearch = async () => {
    if (text) {
      navigate(`/me/search/${type}/${text}`)
      setText("")  
    } else {
      navigate(`/me/search/${type}/all`) 
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate("/")
  }

  const handleFollowers = () => {
    navigate("/me/followers")
  }

  const handleHome = () => {
    navigate("/me")
  }

  return (
    <>
      <div className="header-container">

        <div className="left-container">

          <a onClick={handleHome}> Otaku Me </a>

          <input placeholder="Search" type="search" onChange={(e) => setText(e.target.value)}/>
          <select name="filter" id="filter" onChange={(e) => setType(e.target.value)}>
            <option value="list">Lists</option>
            <option value="item">Items</option> 
            <option value="user">Users</option>
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