
import "./Header.css"

const Header = () => {
    return (
      <>
        <div className="header-container">
          <div className="left-container">
            <a href="google.com"> Otaku Me </a>
            <input placeholder="Search"/>
            <button>Search</button>
          </div>
          <div className="right-container">
            <a href="/profile"> Home </a>
            <a href="/followers"> Followers </a>
            <a href="/profile"> Logout </a>
          </div>
        </div>
      </>
    )
  }
  
  export default Header