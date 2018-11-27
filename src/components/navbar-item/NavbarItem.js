/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import './style.scss';

export default class NavbarItem extends React.Component {
    render() {
        const haveIcon = this.props.icon;
        return (
          <li className="navbar-list-item">
            <a className="navbar-list-element">
                { this.props.label }  {haveIcon ? <FontAwesomeIcon icon={ faAngleDown } /> : ''}
            </a>
        </li>
        )
    }
}
