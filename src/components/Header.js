import { useState } from "react";
import Title from "./Title.";
import { Link } from "react-router-dom";
const Header = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  return (
    <>
      <div className="nav-items">
        <div className="navbar">
          <Title />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/Cart">Cart</Link>
            </li>
          </ul>
        </div>
        <div className="Authentication">
          <Link to="/Auth">
            {isLoggedIn ? (
              <button
                className="login auth-btn"
                onClick={() => setIsLoggedIn(false)}
              >
                Login
              </button>
            ) : (
                <button
                  className="SignUp auth-btn"
                  onClick={() => setIsLoggedIn(true)}
                >
                  LogOut
                </button>
            )}
          </Link>
        </div>
      </div>
    </>
  );
};
export default Header;
