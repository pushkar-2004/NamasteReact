const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src="https://imgs.search.brave.com/nXnlpeW_2aL4u5A_NwsiE0CtnClkIuq4lRGZqE2oGRs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb2Rlc2lnbi5u/ZXQvbG9nby9mb29k/LWNsb2NoZS0yODM2/bGQucG5nP253bT0x/Jm53cz0xJmluZHVz/dHJ5PWZvb2Qmc2Y9/JnR4dF9rZXl3b3Jk/PUFsbA"
            alt="food app logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;