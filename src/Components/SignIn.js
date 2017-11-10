import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import store from './../store';
import auth from './../auth.js';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state={
      email:'',
      password:'',
      authenticated: false,
    };
  }

  handleChange(key) {
    return function (event) {
      var state = {};
      state[key] = event.target.value;
      this.setState(state);
    }.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    var apiBaseUrl = "http://localhost:4741";
    var self = this;
    if(this.state.email.length>0 && this.state.password.length>0){
      var payload={
        "user": {
          "email":this.state.email,
          "password":this.state.password
        }
      };
      fetch(apiBaseUrl + '/sign-in',{
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        store.user = response.user;
        console.log(store.user.token);
        this.forceUpdate(); // To rerender after sign in success
      })
      .catch(res => {
        console.log(res);
      });
    }
  }

  render() {
    const isAlreadyAuthenticated = auth.isAuthenticated();
    return (
       isAlreadyAuthenticated ? <Redirect to = {{
        pathname: '/'
      }} /> : (
      <div className="SignIn">
        <Header />

          <div className="signup">
            <div className="acc">Sign-in.</div>

            <div className="modal-body">
              <form className="sign-up-form" method="post">

                <div className="form-group">
                  <input type="email" name="credentials[email]"
                          placeholder="Your Email" className="sign-in-input"
                          value={this.state.email}
                          onChange={this.handleChange('email')} />
                </div>

                <div className="form-group">
                  <input type="password" name="credentials[password]"
                         placeholder="Set a Password" className="sign-in-input"
                         value={this.state.password}
                         onChange={this.handleChange('password')} />
                </div>

                <button type="submit" className="btn btn-default btn-sign-in"
                        onClick={(event) => this.handleClick(event)}>Continue</button>
              </form>
            </div>
          <p>Forgot password?</p>
          </div>
          <Link to="/signup">
            <p className="noacc">Dont have an account yet?</p>
          </Link>

        <Footer />
      </div>
    )

    );
  }
}

export default SignIn;
