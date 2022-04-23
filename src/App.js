import { Routes, Route } from 'react-router-dom'

import SignIn from "./pages/SignIn"
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Followers from "./pages/Followers"
import Search from './pages/Search'

function App() {
  return (
    <>
      <div>THIS IS A FIXED DIV ON APP</div>

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