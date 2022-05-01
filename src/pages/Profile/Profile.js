import Header from "../../components/Header/Header.js"
import UserProfile from '../../components/User/UserProfile'
import ListView from "../../components/Lists/ListView.js"
import apiUtils from "../../utils/api.utils.js"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import "./Profile.css"

function Profile() {

  const { userURL } = useParams
  const [userData, setUserData] = useState("")

  const [listID,setListID] = useState("")
  const [listData, setListData] = useState("")

  const getUserInfoByID = async () => {
    try {
      if (userURL) {
        const returnedData = await apiUtils.getSecondaryUserInfoFromDB(userURL)
        setUserData(returnedData)
        setListData(returnedData.lists[0])
      } {
        const returnedData = await apiUtils.getPrimaryUserInfoFromDB()
        setUserData(returnedData)
        setListData(returnedData.lists[0])
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

  const pickNewList = () => {
    const pickedListFromUser = userData.lists.find(list => {
      return list._id === listID
    })
    setListData(pickedListFromUser)
  }

  useEffect(()=>{
    if (listID){
      pickNewList()
    }
  },[listID])

  return (
    <>
      <Header/>

      <div className="profile-container">
        
        <div className="profile-left-container">
          { userData && <UserProfile userData={userData} setListID={setListID}/>}
        </div>

        <div className="profile-right-container">
          { listData && <ListView listData={listData} />}
        </div>
      </div>
    </>
  )
  }
  
  export default Profile