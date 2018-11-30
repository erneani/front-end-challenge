import React from 'react';
import CommomLabel from '../commom-label/CommomLabel';

import './style.scss';

export const NavbarLink = (props) => {
  return (
    <a href={props.url} className="navbar-link">
      <CommomLabel label={props.label} className="navbar-link-label" />
    </a>
  )
}
