import React from 'react';
import CommomLabel from '../commom-label/CommomLabel';
import HeaderLogo from '../header-logo/HeaderLogo';

import './style.scss';

export const NavbarVehicles = (props) => {
  return(
    <li className="navbar-vehicle-list-item">
      <div className="navbar-vehicle-wrapper">
        <CommomLabel label={props.label} className="navbar-vehicle-title" />
        <HeaderLogo source={props.source} alt={props.alt} className="navbar-vehicle-image-wrapper" />
      </div>
    </li>
  )
}
