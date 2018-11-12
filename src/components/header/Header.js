import React from 'react';
import Navbar from '../navbar/Navbar';
import HeaderLogo from '../header-logo/HeaderLogo';

import './style.scss'

export default class Header extends React.Component {
    render () {
        return (
            <div className="main-header">
                {/* Logo */}
                <HeaderLogo source="logo_Logo-Grand-Motors.png" />
                {/* Navbar */}
                <Navbar />
                {/* Logo */}
                <HeaderLogo source="logo_brand_horizontal_10.png" />
            </div>
        )
    }
}