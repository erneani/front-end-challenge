import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import SocialLetter from '../social-letter/SocialLetter';

import './style.scss';

export default class SocialButton extends React.Component {
  render() {
    return (
      <li className="social-list-element">
        <div className="social-button">
          <FontAwesomeIcon icon={ faCoffee } /> { this.props.label }
        </div>
        <SocialLetter letter={ this.props.letter } />
      </li>
    )
  }
}