import UserProfile from '../../components/User/UserProfile'
import ListView from "../../components/Lists/ListView.js"
import Header from "../../components/Header/Header.js"
import apiUtils from "../../utils/api.utils.js"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import "./Profile.css"

function Profile() {
  
  const { list } = useParams()
  const { username } = useParams()
  
  const [listID,setListID] = useState("")
  const [userData, setUserData] = useState("")
  const [listData, setListData] = useState("")

  const getUserInfoByUsername = async () => {
    try {
      const returnedData = await apiUtils.getUserInfoFromDB(username)
      setUserData(returnedData)
      if (list) {
        setListID(list)
      } else {
        setListData(returnedData.lists[0])
      }
    } catch (error) {
      throw error.response
    }
  }

  useEffect(()=>{
    async function fetchData() {
      await getUserInfoByUsername()
    }
    fetchData()
  },[username,listID])

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
      <Header />
      <div className="profile-container">
        
        <div className="profile-left-container">
          { userData && <UserProfile userData={userData} setListID={setListID}/>}
        </div>

        <div className="profile-right-container">
          { listData && <ListView listData={listData} setListID={setListID}/>}
        </div>
      </div>
    </>
  )
  }
  
  export default Profile