import "./SignIn.css"

const SignIn = () => {

  return (
    <>
      <div className="signin-container">
        <div className="otaku-me">
          <h1>Otaku Me</h1>
          <h5>Share the Otaku inside of you</h5>
        </div>

        <form className="form-card-container">
          
          <input
            id="email"
            type="email"
            placeholder="Email"
          />

          <input
            id="password"
            type="password"
            placeholder="Password"
          />

          <button className="signin-button" type="submit">Log In</button>

          <button className="signup-button" type="submit">Create new account</button>

        </form>
      </div>
    </>
  )
}

export default SignIn