import React from 'react';
import SmallLabel from '../small-label/SmallLabel';
import SocialList from '../social-list/SocialList';

import './style.scss';

export default class Social extends React.Component {
  render() {
    return (
      <div className="social">
        <SmallLabel label={ this.props.label } />
        <SocialList />
      </div>
    )
  }
}