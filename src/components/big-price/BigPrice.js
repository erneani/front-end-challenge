import React from 'react';

import './style.scss';

export default class BigPrice extends React.Component {
  render() {
    return <label className="big-price"> { this.props.price } </label>
  }
}