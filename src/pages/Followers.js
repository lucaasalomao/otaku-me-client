import UserCard from '../components/User/UserCard'
import Header from "../components/Header/Header.js"

function Followers({ setUserProfile, setSearchedData }) {
  return (
    <>
      <Header setSearchedData={setSearchedData}/>
              
      <UserCard setUserProfile={setUserProfile}/>
    </>
  )
}

export default Followers