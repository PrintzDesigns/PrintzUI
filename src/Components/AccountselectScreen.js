import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
// import AccountSelect from './AccountSelect';
import DesignerSignup from './DesignerSignup';
import './../App.css';

class AccountselectScreen extends Component {
  render() {
    return (
      <div className="AccountselectScreen">
        <Header />
        <DesignerSignup />
        <Footer />
      </div>
    );
  }
}

export default AccountselectScreen;
