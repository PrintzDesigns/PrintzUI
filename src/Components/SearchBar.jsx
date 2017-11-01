import React, { Component } from 'react';
import './../App.css';
import './../CSS/ProfilePage.css';
import logo from './../../app/assets/images/printzlogo.png';
import pencilIcon from './../../app/assets/icons/edit.png'
import profileIcon from './../../app/assets/icons/default_profile.png'

import {Navbar, FormGroup, FormControl, Button, InputGroup} from 'react-bootstrap';

class SearchBar extends Component {


  render() {
    return (
      <div className="SearchBar">
          <img alt="" className="search-logo" src={logo} />
          <FormControl className="search-input" type="text" placeholder="Browse looks, furniture, designers"/>
          {/* TODO: add icons /*/}
      </div>
    );
  }
}

export default SearchBar;
