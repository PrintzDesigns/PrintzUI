import React, { Component } from 'react';
import './../App.css';
import mail from './../../app/assets/images/mail.png';
import facebook from './../../app/assets/images/facebooklogo.png';
import instagram from './../../app/assets/images/instagram.png';
import pinterest from './../../app/assets/images/pinterest.png';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <footer>
          <div className="footer-contents">
            <div className="footer-text">
              <ul>
                <li className="contact contact-text">CONTACT US</li>
                <li className="contact"><a href="mailto:hello@printzdesigns.com">hello@printzdesigns.com</a></li>
              </ul>
            </div>
            <div className="footer-details">
              <ul>
                <li className="contact details"><a href="#">PARTNERS</a></li>
                <li className="contact details"><a href="https://printzdesigns.blog/" target="_blank">BLOG</a></li>
                <li className="contact details"><a href="#">CAREERS</a></li>
                <li className="contact details"><a href="#">TERMS AND PRIVACY POLICY</a></li>
              </ul>
            </div>
            <div className="footer-notes">
              <div className="newsletter">Sign up for our newsletter</div>
                <div id="mc_embed_signup">
                 <form action="//printzdesigns.us16.list-manage.com/subscribe/post?u=de737b95e49a1186ea7190c90&amp;id=4e23066323" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate">
                    <div id="mc_embed_signup_scroll">
                      <div className="input-space">
                        <input type="email" value="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="Your email" required/>
                      </div>
                      <div className="input-space button-space">
                        <input type="image" src={mail} className="button"/>
                      </div>
                    </div>
                  </form>
                </div>
              <ul className="social">
                <li><a href="https://www.pinterest.com/printzdesigns/" target="_blank"><img className="fb" src={pinterest} alt=""/></a>
                </li>
                <li><a href="https://www.instagram.com/printzdesigns/" target="_blank"><img className="fb" src={instagram} alt=""/></a>
                </li>
                <li><a href="https://www.facebook.com/printzdesigns/" target="_blank"><img className="fb" src={facebook} alt=""/></a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
