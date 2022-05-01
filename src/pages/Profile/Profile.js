import Header from "../../components/Header/Header.js"
import UserProfile from '../../components/User/UserProfile'
import FullItem from "../../components/Items/FullItem.js"
import FullList from "../../components/Lists/FullList.js"
import apiUtils from "../../utils/api.utils.js"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import "./Profile.css"

function Profile() {

  const { userURL } = useParams()
  const { list } = useParams()
  const { item } = useParams()

  const [userData, setUserData] = useState("")

  const getUserInfoByID = async () => {
    try {
      if (userURL) {
        const returnedData = await apiUtils.getSecondaryUserInfoFromDB(userURL)
        setUserData(returnedData)
      } else {
        const returnedData = await apiUtils.getPrimaryUserInfoFromDB()
        setUserData(returnedData)
      }
    } catch (error) {
      throw error.response
    }
  }

  useEffect(()=>{
    async function fetchData() {
      await getUserInfoByID()
    }
    fetchData()
  },[])

  console.log(userData)

  return (
    <>
      <Header/>

      <div className="profile-container">
        
        <div className="profile-left-container">
          { userData && <UserProfile userData={userData} />}
        </div>

        <div className="profile-right-container">
          { userData && <FullList key={list} list={list}/>}
          { userData && <FullItem key={item} item={item}/>}
        </div>
      </div>
    </>
  )
  }
  
  export default Profile