import React, { Component } from 'react';
import './../App.css';
import './../CSS/ProfilePage.css';
import logo from './../../app/assets/images/printzlogo.png';
import pencilIcon from './../../app/assets/icons/edit.png'
import profileIcon from './../../app/assets/icons/default_profile.png'
import discoverIcon from './../../app/assets/icons/discover.png'

import {Navbar, FormGroup, FormControl, Button, InputGroup} from 'react-bootstrap';

class SearchBar extends Component {


  render() {
    return (
      <div className="SearchBar">
        <div className="logo-container">
          <img alt="" className="search-logo" src={logo} />
        </div>

        <FormControl className="search-input" type="text" placeholder="Browse looks, furniture, designers"/>

        <div className="right-menu">
          <a href="#"><img alt="" className="discover-icon small-icon" src={discoverIcon} /></a>
          <a href="#"><img alt="" className="profile-icon small-icon" src={profileIcon} /></a>
          {"Evelyn Horn"}
        </div>
      </div>
    );
  }
}

export default SearchBar;
