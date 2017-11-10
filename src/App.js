import React, { Component } from 'react';
import HomepageScreen from './Components/HomepageScreen';
import AccountselectScreen from './Components/AccountselectScreen';
import SignIn from './Components/SignIn';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import $ from 'jquery';
class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Route exact path="/" component={HomepageScreen} />
          <Route exact path="/signup" component={AccountselectScreen} />
          <Route exact path="/signin" component={SignIn} />

        </div>
      </Router>
    )
  }
};
window.$ = window.jQuery = require('jquery')
export default App;
