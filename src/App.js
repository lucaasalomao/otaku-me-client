import "./App.css"

import { Routes, Route } from 'react-router-dom'
import { useState } from "react"

import SignIn from "./pages/SignIn/SignIn"
import SignUp from './pages/SignUp/SignUp'
import Profile from './pages/Profile/Profile'
import Followers from "./pages/Followers"
import Search from './pages/Search/Search'
import PrivateOutlet from "./components/PrivateOutlet"

function App() {

  /* this is the state created for the profile being accessed from any place on the application*/
  const [userProfile,setUserProfile] = useState("")
  console.log(userProfile)

  /* this is the state created for the data returned from header search from any place on the application*/
  const [searchedData,setSearchedData] = useState([])
  console.log(searchedData)

  /* this is the state created for the requested list from any place on the application*/
  const [requestedList,setRequestedListCard] = useState([])
  console.log(requestedList)

  /* this is the state created for the requested item from any place on the application*/
  const [requestedItem,setRequestedItemCard] = useState([])
  console.log(requestedItem)

  return (
    <>
      <Routes>
        <Route path='/' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
       
        <Route path='/me' element={<PrivateOutlet/>} >
          <Route path='/me/profile' element={
            <Profile 
              setUserProfile={setUserProfile}
              setSearchedData={setSearchedData}
              setRequestedListCard={setRequestedListCard}
              setRequestedItemCard={setRequestedItemCard}
            /> }
          />
          <Route path='/me/followers' element={
            <Followers
              setUserProfile={setUserProfile}
              setSearchedData={setSearchedData}
            />}
          />
          <Route path='/me/search' element={
            <Search
              setUserProfile={setUserProfile}
              setSearchedData={setSearchedData}
              setRequestedListCard={setRequestedListCard}
              setRequestedItemCard={setRequestedItemCard}
            />}
          />
        </Route>

      </Routes>
    </>
  )
}

export default App