import React from 'react';

import './style.scss';

export default class CallButtonDropdown extends React.Component {
  render() {
    return(
      <div className={"call-button-dropdown "+this.props.className}>
        {this.props.children}
      </div>
    )
  }
}
