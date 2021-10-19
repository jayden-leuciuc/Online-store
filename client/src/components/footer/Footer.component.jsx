import React from 'react';

import { FiInstagram, FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi';

import './Footer.styles.scss';

function Footer() {
  return (
    <div className='entire-footer'>
      <footer class='footer-container'>
        <div className='logo-Social-Container'>
          <img src='' alt='Logo' />
          <div className='social-icons'>
            <a href='https://facebook.com' target='_blank'>
              <FiFacebook className='icon' />
            </a>
            <a href='https://instagram.com' target='_blank'>
              <FiInstagram className='icon' />
            </a>
            <a href='https://twitter.com' target='_blank'>
              <FiTwitter className='icon' />
            </a>
            <a href='https://youtube.com' target='_blank'>
              <FiYoutube className='icon' />
            </a>
          </div>
        </div>
        <div class='shop'>
          <h3>Customer Service</h3>
          <ul>
            <li>
              <a href='returns'>Returns</a>
            </li>
            <li>
              <a href='/tracking'>Track Your Order</a>
            </li>
            <li>
              <a href='/gift-cards'>Gift Cards and Promos</a>
            </li>
            <li>
              <a href='/payments'>Payment</a>
            </li>
            <li>
              <a href='/discounts'>Discounts</a>
            </li>
          </ul>
        </div>
        <div class='slot1'>
          <h3>About</h3>
          <ul>
            <li>
              <a href='/about-us'>About Us</a>
            </li>
            <li>
              <a href='/returns'>Returns</a>
            </li>
            <li>
              <a href='/faq'>FAQ</a>
            </li>
          </ul>
        </div>
      </footer>
      <hr />
      <div className='lower-footer'>
        <ul>
          <li>Icon US</li>
          <li>E-Commerce Store &#169;</li>
        </ul>
        <ul>
          <li>
            <a href=''>Terms</a>
          </li>
          <li>
            <a href=''>Privacy Policy</a>
          </li>
          <li>
            <a href=''>CA Supply Chains Act</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
