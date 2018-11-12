/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './style.scss';

export default class NavbarItem extends React.Component {
    render() {
        return <li className="navbar-list-item">
            <a className="navbar-list-element">{ this.props.label }</a>
        </li>
    }
}