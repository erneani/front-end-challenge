import React from 'react';

import './style.scss';

export default class WarningLabel extends React.Component {
  render() {
    return <div className="warning-label"> { this.props.warning } </div>
  }
}