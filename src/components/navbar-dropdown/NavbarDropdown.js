import React from 'react';
import { NavbarItemList } from '../navbar-item-list/NavbarItemList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import './style.scss';

export default class NavbarDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownShown: false,
    }
  }

  handleClick = () => {
    this.setState({
      dropdownShown: !this.state.dropdownShown,
    })
  }
  render() {
    return (
        <NavbarItemList>
          <div className="navbar-dropdown" onClick={this.handleClick}>
            <div className="navbar-dropdown-label"> {this.props.label} <FontAwesomeIcon icon={faAngleDown} /> </div>
            <div className={`navbar-dropdown-wrapper ${this.state.dropdownShown?" navbar-dropdown-wrapper-show":""}`}>
              <div
                className={"navbar-dropdown-list"}>
                {this.props.children}
              </div>
            </div>
          </div>
      </NavbarItemList>
    )
  }
}
