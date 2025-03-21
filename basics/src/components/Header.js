import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

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
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
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