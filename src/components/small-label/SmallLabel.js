import React from 'react';

import './style.scss';

export default class SmallLabel extends React.Component {
  render() {
    return <div className="small-label"> {this.props.label} </div>
  }
}