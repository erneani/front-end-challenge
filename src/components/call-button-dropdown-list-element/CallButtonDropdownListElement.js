import React from 'react';
import CommomLabel from '../commom-label/CommomLabel';

import './style.scss';

export default class CallButtonDropdownListElement extends React.Component {
  render() {
    return(
      <li className="dropdown-item-list-element">
          {this.props.element} <CommomLabel label={this.props.thinElement} className="dropdown-item-list-thin-element"/>
      </li>
    )
  }
}
