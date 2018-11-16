import React from 'react';
import SocialButton from '../social-button/SocialButton';

import './style.scss';

export default class SocialList extends React.Component {
  render() {
    return (
      <ul className="social-list">
         <SocialButton label="Share" letter="378K" />
         <SocialButton label="Like" letter="229K" />
      </ul>
    )
  }
}