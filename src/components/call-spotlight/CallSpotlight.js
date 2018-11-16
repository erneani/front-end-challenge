import React from 'react';

import './style.scss';

export default class CallSpotlight extends React.Component {
  render() {
    return <div className="call-spotlight"> {this.props.label} </div>
  }
}