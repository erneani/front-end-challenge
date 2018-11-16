import React from 'react';

import './style.scss';

export default class SocialLetter extends React.Component {
  render() {
    return (
      <div className="social-letter-wrapper">
        <div className="social-left-triangle"></div>
        <div className="social-letter">
          { this.props.letter }
        </div>
      </div>
    )
  }
}