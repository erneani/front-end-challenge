import React from 'react';

import './style.scss';

export const NavbarItemList = (props) => {
  return (
    <li className={"navbar-list-item "+props.className}>
      {props.children}
    </li>
  )
}
