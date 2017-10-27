import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import AccountSelect from './AccountSelect';
import './../App.css';

class AccountselectScreen extends Component {
  render() {
    return (
      <div className="AccountselectScreen">
        <Header />
        <AccountSelect />
        <Footer />
      </div>
    );
  }
}

export default AccountselectScreen;
