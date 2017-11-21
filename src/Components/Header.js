import React, { Component } from 'react';
import './../App.css';
import $ from 'jquery';
import {Link} from 'react-router-dom';
import logo from './../../app/assets/images/printzlogo.png';
import store from './../store';
import auth from './../auth';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {

    const isAlreadyAuthenticated = auth.isAuthenticated();
    const first_name = isAlreadyAuthenticated ? store.user.first_name:'';
    const last_name = isAlreadyAuthenticated ? store.user.last_name:'';
    const dropdown  = isAlreadyAuthenticated ? (
      <div className="drop-down">
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Account</DropdownItem>
          <DropdownItem header>
          <Link to="/" onClick={auth.signOut}>
          Log Out
          </Link>
          </DropdownItem>
          <DropdownItem disabled>WHITEBOARD</DropdownItem>
          <DropdownItem>Rooms</DropdownItem>
          <DropdownItem>Inspiration</DropdownItem>
          <DropdownItem>Items</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>PROFILE</DropdownItem>
          <DropdownItem>Friends</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown> </div> ) : '';

    return (
      <div className="Header">
        <div className="signin">
          {first_name } {last_name} {dropdown}
          { isAlreadyAuthenticated ? ''
           : (
          <Link to="/signin">
            <p className="signin-text">We noticed you do not have an account yet. Get Started</p>
          </Link>
        )
      }

        </div>
        <div className="logo">
          <Link to="/">
            <img alt="" className="logo-1" src={logo} />
          </Link>
        </div>
        <p className="tagline">THE SOCIAL PLACE TO DESIGN YOUR SPACE</p>
        <div className="header-line"></div>
        <div className="ul-menu">
          <ul className="menu">
            <li className="menu-li"><a href="" className="menu-items">Discover</a></li>
            <li className="menu-li"><a href="" className="menu-items">Community Page</a></li>
            <li className="menu-li"><a href="" className="menu-items">
            <Link to="/lookbook" className="menu-items">
              Lookbook
            </Link>
            </a></li>
            <li className="menu-li"><a href="https://www.printzdesigns.blog/" target="_blank" className="menu-items">The Journal</a></li>
            <li className="menu-li"><a href="" className="menu-items">Designers</a></li>
            <li className="menu-li"><a href="" className="menu-items">About Us</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
