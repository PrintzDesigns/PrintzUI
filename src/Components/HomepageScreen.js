import React, { Component } from 'react';
import Header from './Header';
import HomePage from './HomePage';
import Footer from './Footer';
import './../App.css';

class HomepageScreen extends Component {
  render() {
    return (
      <div className="HomepageScreen">
        <Header />
        <HomePage />
        <Footer />
      </div>
    );
  }
}

export default HomepageScreen;
