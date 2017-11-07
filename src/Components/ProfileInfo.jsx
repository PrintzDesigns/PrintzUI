import React, { Component } from 'react';
import './../App.css';

import profileIcon from './../../app/assets/icons/default_profile.png'
import {Grid, Row, Col} from 'react-bootstrap';

class ProfileInfo extends Component {
  render() {
    return (
      <div className="ProfileInfo">
        {/* Profile pic */}
        <img alt="" className="profile-icon large-icon" src={profileIcon} />
        {/* Name */}
        <div className="container-margin">
          <div className="profile-name">
          Evelyn Horn
          </div>
          {/* Followers/Following */}
          <div className="followers">
          {0} FOLLOWERS {0} FOLLOWING
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileInfo;
