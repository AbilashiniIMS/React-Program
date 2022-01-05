import React from 'react';
import './header.css';
// import logoImg from './https://download.logo.wine/logo/Amazon_(company)/Amazon_(company)-Logo.wine.png';
import State from './stateCondition/state';

const Header = () => {
  return (
    <header className="header-part">
      <div className="nav-left">
        <a href="/">
          <strong> ♕ </strong>
          <br />
          <p>Cris Cookies</p>
        </a>
        {/* <img src={logoImg}> */}
      </div>
      <div className="nav-searchfill">
        <div className="nav-search">
          <form id="nav-search-bar-form">
            <div className="nav-left-align">
              <a href="">ALL</a>
            </div>
            <div className="nav-fill">
              <input type="text" />
            </div>
            <div className="nav-right">
              <button type="submit">Search</button>
            </div>
          </form>
        </div>
      </div>
      <div className="nav-right">
        <a href="/">Cart</a>
        <a href="/">Language</a>
        <a href="/">Log in</a>
      </div>
      <State />
    </header>
  );
};
export default Header;
