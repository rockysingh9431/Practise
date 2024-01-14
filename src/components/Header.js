import { useState, useContext } from "react";
import Title from "./Title.";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const isOnline = useOnline();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      <div className="flex justify-between bg-orange-50 shadow-lg mb-2">
        <div className="flex justify-between">
          <Title />
          <ul className="flex py-6 ml-8">
            <li className="p-2">
              <Link data-testid="home" to="/">
                Home
              </Link>
            </li>
            <li className="p-2">
              <Link to="/About">About</Link>
            </li>
            <li className="p-2">
              <Link to="/Contact">Contact</Link>
            </li>
            <li className="p-2">
              <Link to="/instamart">Instamart</Link>
            </li>
            <li className="p-2">
              <Link data-testid="cart" to="/Cart">
                Cart- {cartItems.length} items
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap py-6">
          {isLoggedIn && (
            <h1 className="font-semibold text-lg mr-8">{user.name}</h1>
          )}
          <div data-testid="online-status">{!isOnline ? "🔴" : "🟢"}</div>

          <div data-testid="login-status" className="mx-4 w-10">
            {isLoggedIn ? (
              <Link to="/">
                <button
                  data-testid="logOutButton"
                  className="font-bold text-xl"
                  onClick={() => setIsLoggedIn(false)}
                >
                  Logout
                </button>
              </Link>
            ) : (
              <Link to="/Auth">
                <button
                  data-testid="logInButton"
                  className="font-bold text-xl"
                  onClick={() => setIsLoggedIn(true)}
                >
                  LogIn
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
