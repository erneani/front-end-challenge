import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import './style.scss';

export default class CallButtonDropdownItem extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          dropdownShown: false,
      }
  }

  handleItemClick = () => {
    this.setState({
      dropdownShown: !this.state.dropdownShown,
    })
  }

  render() {
    return(
      <li className={"dropdown-item "+(this.state.dropdownShown?"dropdown-item-highlight":"")} onClick={this.handleItemClick}>
          {this.props.dropdownItem} <FontAwesomeIcon icon={faAngleDown} rotation={this.state.dropdownShown?180:""} />
          <ul className={"dropdown-item-list "+(this.state.dropdownShown?"dropdown-item-list-show":"")}>
            {this.props.children}
          </ul>
      </li>
    )
  }
}
