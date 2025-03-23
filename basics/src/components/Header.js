import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [loginButton, setLoginButton] = useState("Login");
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL} 
            alt="food app logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/"> Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <button className="login" onClick={()=>{
              if(loginButton === "Login"){
                setLoginButton("Logout");
              }else{
                setLoginButton("Login");
              }
            }}>{loginButton}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;