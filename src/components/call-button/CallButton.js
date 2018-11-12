import React from 'react';

import './style.scss';

export default class CallButton extends React.Component {
    render() {
        return(
            <div className="call-button">{ this.props.label }</div>
        )
    }
}