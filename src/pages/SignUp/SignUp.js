import "./SignUp.css"

const SignUp = () => {

  return (
    <>
      <div className="signup-container">
        <div className="otaku-me">
          <h1>Otaku Me</h1>
          <h5>Share the Otaku inside of you</h5>
        </div>

        <form className="form-card-container">
          
          <input
            id="username"
            placeholder="Username"
          />

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

          <button className="signup-button" type="submit">Create account</button>

          <div class="line"></div>

          <span>Have an account?</span>

          <button className="signin-button" type="submit">Log In instead</button>

        </form>
      </div>
    </>
  )
}

export default SignUp