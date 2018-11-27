import React from 'react';
import NavbarItem from '../navbar-item/NavbarItem';
import CallButton from '../call-button/CallButton';

import './style.scss';

export default class Navbar extends React.Component {
    render () {
        return(
            <ul className="navbar-list">
                <NavbarItem label="Nossos veículos" icon="true"/>
                <NavbarItem label="Serviços" />
                <NavbarItem label="Vendas diretas" icon="true"/>
                <CallButton label="Telefones"/>
            </ul>
        )
    }
}
