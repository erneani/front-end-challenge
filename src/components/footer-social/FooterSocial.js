import React from 'react';
import { FacebookIcon, TwitterIcon, GooglePlusIcon, FacebookShareButton, TwitterShareButton, GooglePlusShareButton } from 'react-share';

import './style.scss';

export default class FooterSocial extends React.Component {
  render() {
    return(
      <div className="footer-social-media">
        <ul className="footer-social-media-list">
          <li className="social-media-list-element">
            <FacebookShareButton url="https://www.facebook.com/ToyotaDoBrasil/">
              <FacebookIcon size={35} logoFillColor="rgb(42, 42, 42)" />
            </FacebookShareButton>
          </li>
          <li className="social-media-list-element">
            <TwitterShareButton url="https://twitter.com/toyotadobrasil">
              <TwitterIcon size={35} logoFillColor="rgb(42, 42, 42)" />
            </TwitterShareButton>
          </li>
          <li className="social-media-list-element">
            <GooglePlusShareButton url="https://plus.google.com/+toyotabrasil">
              <GooglePlusIcon size={35} logoFillColor="rgb(42, 42, 42)"/>
            </GooglePlusShareButton>
          </li>
        </ul>
      </div>
    )
  }
}