import "./App.css"

import { Routes, Route } from 'react-router-dom'

import SignIn from "./pages/SignIn/SignIn"
import SignUp from './pages/SignUp/SignUp'
import Profile from './pages/Profile/Profile'
import Followers from "./pages/Followers"
import Search from './pages/Search/Search'
import PrivateOutlet from "./components/PrivateOutlet"

function App() {

  return (
    <>
      <Routes>

        <Route path='/' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
       
        <Route path='/me' element={<PrivateOutlet/>} >

          <Route path='/me/:username'             element={ <Profile/> }/>
          <Route path='/me/:username/:list'       element={ <Profile/> }/>
          <Route path='/me/:username/:list/:item' element={ <Profile/> }/>
          
          <Route path='/me/:username/followers'   element={ <Followers/> }/>

          <Route path='/me/search/:type/all'      element={ <Search/> }/>
          <Route path='/me/search/:type/:text'    element={ <Search/> }/>
        </Route>

      </Routes>
      
    </>
  )
}

export default App