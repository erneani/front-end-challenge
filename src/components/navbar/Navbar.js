import React from 'react';
import NavbarItem from '../navbar-item/NavbarItem';
import CallButton from '../call-button/CallButton';

import './style.scss';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = ["Something", "Something more", "I am beautiful"];
    }
    
    render () {
        return(
            <ul className="navbar-list">
                <NavbarItem label="Nossos veículos" />
                <NavbarItem label="Serviços" />
                <NavbarItem label="Vendas diretas" />
                <CallButton label="Telefones"/>
            </ul>
        )
    }
}