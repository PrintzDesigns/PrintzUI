import React, { Component } from 'react';
import './../App.css';
import {Link} from 'react-router-dom';

class AccountSelect extends Component {
  constructor(props) {
    super(props);
    var signup_route = [];
    this.state = {
      signup_route: ''
    };
  }

  handleClick(event, button_select) {
    console.log(button_select);

    if(button_select === 'Designer') {
      console.log("I am a designer");
      this.setState({
        signup_route: '/designersignup'
      });
    }
    if(button_select === 'User') {
      console.log("I am a user");
      this.setState({
        signup_route: '/designersignup'
      });
    }
    else {
    }
  }

  render() {
    return (
      <div className="AccountSelect">
      <div className="signup">
        <div className="acc">Which account are you creating?</div>

        <div className="usertype-buttons">
          <div><button className="designer-button" onClick={(event) => this.handleClick(event,'Designer')}>Designer</button></div>
          <div className="p-2"><p>Or</p></div>
          <div><button className="user-button" onClick={(event) => this.handleClick(event,'User')}>User</button></div>
        </div>

        <Link to={this.state.signup_route} params={{user_type: this.state.signup_route}}>
        <button className="create-button">Create Account</button>
        </Link>
        </div>
      </div>
    );
  }
}

export default AccountSelect;
