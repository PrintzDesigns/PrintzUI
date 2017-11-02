import React, { Component } from 'react';
import Footer from './Footer';
import SearchBar from './SearchBar';
import ProfileInfo from './ProfileInfo';
import './../App.css';

import addIcon from './../../app/assets/icons/addition.png'

class ProfilePage extends Component {
  render() {
    return (
      <div className="ProfilePage">
        <SearchBar />
        <ProfileInfo />
        
        <hr className="line-break"/>
        
        <div className="profile-content">
          <div className="profile-tabs">
            <a href="#" className="profile-tab">YOUR WALL</a>
            <a href="#" className="profile-tab">STUDIO</a>
            <a href="#" className="profile-tab">DESIGNERS</a>
          </div>

          {/* TODO: render content based on state. placeholder for now */}
          <div className="add-content">
            <img alt="" className="add-icon" src={addIcon} />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default ProfilePage;
