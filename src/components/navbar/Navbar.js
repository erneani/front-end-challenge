import React from 'react';
import NavbarItem from '../navbar-item/NavbarItem';
import NavbarDropdown from '../navbar-dropdown/NavbarDropdown';
import CallButton from '../call-button/CallButton';
import { NavbarLink } from '../navbar-link/NavbarLink';
import { NavbarVehicles } from '../navbar-vehicles/NavbarVehicles';
import { NavbarVehiclesList } from '../navbar-vehicles-list/NavbarVehiclesList';

import './style.scss';

export default class Navbar extends React.Component {
    render () {
        return(
            <ul className="navbar-list">
                <NavbarDropdown label="Nossos veículos">
                  <NavbarVehiclesList>
                    <NavbarVehicles source="etios-etios.png" alt="Etios Hatch 2017" label="Etios Hatch 2017"/>
                    <NavbarVehicles source="etios-sedan.png" alt="Etios Sedã 2017" label="Etios Sedã 2016"/>
                    <NavbarVehicles source="etios-cross.png" alt="Etios Cross 2017" label="Etios Cross 2017"/>
                    <NavbarVehicles source="etios-corolla.png" alt="Corolla 2016" label="Corolla 2016"/>
                    <NavbarVehicles source="etios-hilux.png" alt="Hilux CD Diesel" label="Hilux CD Diesel"/>
                    <NavbarVehicles source="etios-etios.png" alt="Etios Hatch 2017" label="Etios Hatch 2017"/>
                    <NavbarVehicles source="etios-sedan.png" alt="Etios Sedã 2017" label="Etios Sedã 2016"/>
                    <NavbarVehicles source="etios-cross.png" alt="Etios Cross 2017" label="Etios Cross 2017"/>
                    <NavbarVehicles source="etios-corolla.png" alt="Corolla 2016" label="Corolla 2016"/>
                    <NavbarVehicles source="etios-hilux.png" alt="Hilux CD Diesel" label="Hilux CD Diesel"/>
                  </NavbarVehiclesList>
                </NavbarDropdown>
                <NavbarItem label="Serviços" />
                <NavbarDropdown listClassName="alternative-padding" label="Vendas diretas">
                  <NavbarLink label="Empresas"/>
                  <NavbarLink label="Frotistas"/>
                  <NavbarLink label="Governo"/>
                  <NavbarLink label="PCD"/>
                  <NavbarLink label="Produtor rural"/>
                  <NavbarLink label="Taxista"/>
                </NavbarDropdown>
                <CallButton label="Telefones"/>
            </ul>
        )
    }
}
