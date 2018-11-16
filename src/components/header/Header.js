import React from 'react';
import Navbar from '../navbar/Navbar';
import HeaderLogo from '../header-logo/HeaderLogo';

import './style.scss'

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageScrolled: false,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > 0) {
            console.log("Scrolled...")
            this.setState({
                pageScrolled: true,
            })
        }
        else if (window.scrollY <= 0) {
            console.log("Nom scrolled...")
            this.setState({
                pageScrolled: false,
            })
        }
    }

    render () {
        return (
            <div className={(window.scrollY>0?"scrolled-header":"") +" main-header fixed"}>
                <HeaderLogo source="logo_Logo-Grand-Motors.png" />
                <Navbar />
                <HeaderLogo source="logo_brand_horizontal_10.png" />
            </div>
        )
    }
}