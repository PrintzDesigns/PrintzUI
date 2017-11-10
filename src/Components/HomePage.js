import React, { Component } from 'react';
import './../App.css';
import placeholder1 from './../../app/assets/images/carousel.png';
import selection1 from './../../app/assets/images/selection1.png';
import selection2 from './../../app/assets/images/selection2.png';
import selection3 from './../../app/assets/images/selection3.png';
import {Link} from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (

      <div className="HomePage">
        <div className="slideshow">
          <a href="https://printzdesigns.blog/2017/09/25/fall-refresh/" target="_blank" className="menu-items">
            <img className="slides" src={placeholder1} alt=""/>
          </a>
      </div>
      <div className="selections">
        <div className="heading-1">SELECTIONS</div>
        <div className="heading-2">of the week</div>
        <div className="products">
          <figure className="product">
            <a href="https://printzdesigns.blog/2017/09/25/fall-refresh/" target="_blank">
              <img className="thumbnail" src={selection1} alt=""/>
            </a>
          </figure>
          <figure className="product">
            <a href="https://printzdesigns.blog/2017/09/25/fall-refresh/" target="_blank">
              <img className="thumbnail" src={selection2} alt=""/>
            </a>
          </figure>
          <figure className="product">
            <a href="https://printzdesigns.blog/2017/09/25/fall-refresh/" target="_blank">
              <img className="thumbnail" src={selection3} alt=""/>
            </a>
          </figure>
        </div>
      </div>
  <div className="hiw">
    <div className="heading-3">How It Works</div>
    <div>
      <div className="line"></div>
      <div className="steps">
        <div className="step">
          <h3 className="num-1">1</h3>
          <h3 className="head-1">Get Inspired</h3>
          <p className="p-1">With our selection of designers and curated lookbooks,
             we help you find the look you love.</p>
        </div>
        <div className="step">
          <h3 className="num-1">2</h3>
          <h3 className="head-1">Build</h3>
          <p className="p-1">Ceate your dream room before
                          buying anything. We help you budget, match, and
                          select your furniture.</p>
        </div>
        <div className="step">
          <h3 className="num-1">3</h3>
          <h3 className="head-1">Share</h3>
          <p className="p-1">Work on rooms with friends, and share your designs
                         with our tight-knit community.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="get-started">
    <Link to="/signup">
      Get Started
    </Link>
  </div>
      </div>
    );
  }
}

export default HomePage;
