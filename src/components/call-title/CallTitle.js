import React from 'react';

import './style.scss';

export default class CallTitle extends React.Component {
  render() {
    return (
      <div className="call-title">
        {this.props.label}
      </div>
    )
  }
}