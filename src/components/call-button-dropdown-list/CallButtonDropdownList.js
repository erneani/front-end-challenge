import React from 'react';

import './style.scss';

export default class CallButtonDropdownList extends React.Component {
  render() {
    return(
      <ul className="dropdown-list">
        {this.props.children}
      </ul>
    )
  }
}
