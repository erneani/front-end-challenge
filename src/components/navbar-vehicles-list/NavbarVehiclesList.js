import React from 'react';

import './style.scss';

export const NavbarVehiclesList = (props) => {
  return(
    <ul className="navbar-vehicles-list">
      {props.children}
    </ul>
  )
}
