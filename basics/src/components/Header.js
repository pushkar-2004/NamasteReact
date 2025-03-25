import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-20" src={LOGO_URL} alt="food app logo" />
      </div>
      <div className="flex">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/"> Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li >
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li className="px-4">
          <button
            className="login"
            onClick={() => {
              if (loginButton === "Login") { 
                setLoginButton("Logout");
              } else {
                setLoginButton("Login");
              }
            }}
          >
            {loginButton}
          </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
