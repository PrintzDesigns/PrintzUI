import React, { Component } from 'react';
import ProfilePage from './Components/ProfilePage';
import HomepageScreen from './Components/HomepageScreen';
import AccountselectScreen from './Components/AccountselectScreen';
import SignIn from './Components/SignIn';
import DesignerSignup from './Components/DesignerSignup';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Route exact path="/" component={HomepageScreen} />
          <Route exact path="/signup" component={AccountselectScreen} />
          <Route exact path="/designersignup" user_type="user" component={DesignerSignup} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/myprofile" component={ProfilePage} />
        </div>
      </Router>
    )
  }
};

export default App;
