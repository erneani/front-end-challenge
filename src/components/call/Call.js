import React from 'react';
import CallTitle from '../call-title/CallTitle';
import CallSpotlight from '../call-spotlight/CallSpotlight';
import CallSubtitle from '../call-subtitle/CallSubtitle';

import './style.scss';

export default class Call extends React.Component {
  render() {
    return (
      <div className="call-wrapper">
        <CallTitle label={this.props.title} />
        <CallSpotlight label={this.props.spotlight} />
        <CallSubtitle label={this.props.subtitle} />
      </div>
    )
  }
}