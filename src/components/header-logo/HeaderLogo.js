import React from 'react';

import './style.scss';

export default class HeaderLogo extends React.Component {
    render() {
        return (
            <div className="header-logo-wrapper">
                <img className="header-logo" 
                    src={ require("../../images/"+this.props.source) }
                    alt={ this.props.alt } 
                />
            </div>
        )
    }
}