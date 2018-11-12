import React from 'react';

import './style.scss';

export default class HeaderLogo extends React.Component {
    render() {
        return (
            <div className="header-logo-wrapper">
                <img className="header-logo" src="" alt={ this.props.alt }></img>
            </div>
        )
    }
}