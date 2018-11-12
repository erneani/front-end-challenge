import React from 'react';
import Navbar from '../navbar/Navbar';

import './style.scss'

export default class Header extends React.Component {
    render () {
        return (
            <div className="main-header">
                {/* Logo */}
                <h1>First element</h1>
                {/* Navbar */}
                <Navbar />
                {/* Logo */}
                <h1>Third element</h1>
            </div>
        )
    }
}