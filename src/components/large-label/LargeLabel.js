import React from 'react';

import './style.scss';

export default class LargeLabel extends React.Component {
  render() {
    return <label className="large-label"> {this.props.label} <spam className="label-previous-price">{this.props.price}</spam></label>
  }
}