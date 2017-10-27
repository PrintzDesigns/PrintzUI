import React, { Component } from 'react';
import './../App.css';
import {Link} from 'react-router-dom';

import logo from './../../app/assets/images/printzlogo.png';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="signin">
        <Link to="/signin">
            Sign-In
        </Link>
        </div>
        <div className="logo">
          <img alt="" className="logo-1" src={logo} />
        </div>
        <ul className="menu">
          <li><a href="">Designers</a></li>
          <li><a href="">Discover</a></li>
          <li><a href="https://www.printzdesigns.blog/" target="_blank">The Journal</a></li>
          <li><a href="">Lookbook</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>
    );
  }
}

export default Header;
