import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default class CallButtonDropdownItem extends React.Component {
  render() {
    return(
      <li>
          {this.props.dropdownItem} <FontAwesomeIcon icon={faAngleDown} />
      </li>
    )
  }
}