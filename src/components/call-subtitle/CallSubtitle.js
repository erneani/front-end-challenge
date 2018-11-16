import React from 'react';

import './style.scss';

export default class CallSubtitle extends React.Component {
  render() {
    return <div className="call-subtitle">{this.props.label}</div>
  }
}