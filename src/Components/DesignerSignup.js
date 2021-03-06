import React, { Component } from 'react';
import './../App.css';

class DesignerSignup extends Component {
  constructor(props) {
    super(props);
    this.state={
      first_name:'',
      last_name:'',
      email:'',
      password:''
    };
  }

  signUpSuccess(response) {
    console.log("Inside signup success");
    console.log("response is", response.json());
    alert("signUpSuccess");
  }

  signUpFailure(data) {
    console.log("Inside signUpFailure ");
    console.log("error is", data.json());
    alert("sign up failed");
  }

  handleClick(event) {
    event.preventDefault();
    var apiBaseUrl = "http://www.localhost:4741";
    var self = this;
    if(this.state.first_name.length>0 && this.state.last_name.length>0 && this.state.email.length>0 && this.state.password.length>0) {
      var payload={
        "user": {
          "first_name": this.state.first_name,
          "last_name":this.state.last_name,
          "email":this.state.email,
          "password":this.state.password
        }
    };

    fetch(apiBaseUrl + '/sign-up', {
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
    })
    .catch();
  }
  }

  handleChange(key) {
    return function (event) {
      var state = {};
      state[key] = event.target.value;
      this.setState(state);
    }.bind(this);
  }

  render() {
    return (
      <div className="DesignerSignup">
        <div className="signup">
            <div className="acc">We are happy to have you.</div>

            <div className="modal-body">
              <form className="sign-up-form" method="post">
                <div className="form-group">
                  <input type="text" name="credentials[firstname]"
                         placeholder="First Name" className="sign-up-input"
                         value={this.state.first_name}
                         onChange={this.handleChange('first_name')} />
                </div>
                <div className="form-group">
                  <input type="text" name="credentials[lastname]"
                         placeholder="Last Name" className="sign-up-input"
                         value={this.state.last_name}
                         onChange={this.handleChange('last_name')} />
                </div>

                <div className="form-group">
                  <input type="email" name="credentials[email]"
                         placeholder="Your Email" className="sign-up-input"
                         value={this.state.email}
                         onChange={this.handleChange('email')} />
                </div>

                <div className="form-group">
                  <input type="password" name="credentials[password]"
                         placeholder="Set a Password" className="sign-up-input"
                         value={this.state.password}
                         onChange={this.handleChange('password')} />
                </div>

                <button type="submit" className="btn btn-default"
                        onClick={(event) => this.handleClick(event)}>Continue</button>
              </form>
            </div>
          </div>
      </div>
    );
  }
}

export default DesignerSignup;
