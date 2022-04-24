import { Routes, Route } from 'react-router-dom'

import Header from "./components/Header/Header.js"
import SignIn from "./pages/SignIn"
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Followers from "./pages/Followers"
import Search from './pages/Search'

function App() {
  return (
    <>
      <Header/>
      
      <Routes>
        <Route path='/*' element={<Profile/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/followers' element={<Followers/>} />
        <Route path='/search' element={<Search/>} />
      </Routes>

    </>
  )
}

export default App