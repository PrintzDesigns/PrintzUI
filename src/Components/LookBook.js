import React, { Component } from 'react';
import './../../app/assets/styles/lookbook.css';
import GabbyLogo from './../../app/assets/images/GabbyHomeLogo.png';
import GabbyHomeImg from './../../app/assets/images/GabbyHomeImg.jpg';
import WorldsAwayLogo from './../../app/assets/images/WorldsAwayLogo.png';
import WorldsAwayImg from './../../app/assets/images/WorldsAwayImg.jpg';
import RADLogo from './../../app/assets/images/RADLogo.png';
import RADImg from './../../app/assets/images/RADImg.jpg';
import Header from './Header';
import Footer from './Footer';

class LookBook extends Component {
  render() {
    return (
      <div className="LookBook">
        <Header />
        <div className="lookbook">
          <div className="look">
            <div className="title">
              <div className="logo-2">
                <img alt="" className="logo-2" src={GabbyLogo} alt="" />
              </div>
              <div className="vendor-name">
                <div className="title-1">Gabby Home</div>
                <div className="followers">298 followers</div>
              </div>
              <button className="follow-button">Follow</button>
              <div className="vendorimg">
                <a href="#">
                  <img className="vendorimg1" src={GabbyHomeImg} alt="" />
                </a>
                <button className="lookButton">LOOK</button>
              </div>
            </div>
            <div className="title">
              <div className="logo-2">
                <img alt="" className="logo-2" src={WorldsAwayLogo} alt="" />
              </div>
              <div className="vendor-name">
                <div className="title-1">Worlds Away</div>
                <div className="followers">523 followers</div>
              </div>
              <button className="follow-button">Follow</button>
              <div className="vendorimg">
                <a href="#">
                  <img className="vendorimg1" src={WorldsAwayImg} alt="" />
                </a>
                <button className="lookButton">LOOK</button>
              </div>
            </div>
            <div className="title">
              <div className="logo-2">
                <img alt="" className="logo-2" src={RADLogo} alt="" />
              </div>
              <div className="vendor-name">
                <div className="title-1">Regina Andrews Deisgn</div>
                <div className="followers">102 followers</div>
              </div>
              <button className="follow-button">Follow</button>
              <div className="vendorimg">
                <a href="#">
                  <img className="vendorimg1" src={RADImg} alt="" />
                </a>
                <button className="lookButton">LOOK</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default LookBook;
