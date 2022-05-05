import "./SignIn.css"

import api from "../../utils/api.utils"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SignIn = () => {

  let navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassowrd] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await api.signin({username, password})
      navigate(`/me/${username}`)
    } catch (error) {
      throw error.response
    }
  }
 
  return (
    <>
      <div className="signin-container">
        <div className="otaku-me">
          <h1>Otaku Me</h1>
          <h5>Share the Otaku inside of you</h5>
        </div>

        <form className="form-card-container" onSubmit={handleSubmit}>
          
          <input
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassowrd(e.target.value)}
          />

          <button className="signin-button" type="submit">Log In</button>

          <div className="line"></div>

          <span>Do not have an account?</span>

          <button className="signup-button" href="/me/profile">Create new account</button>

        </form>
      </div>
    </>
  )
}

export default SignIn