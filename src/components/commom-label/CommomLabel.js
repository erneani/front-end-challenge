import React from 'react';

import './style.scss';

export default class CommomLabel extends React.Component {
    render() {
        return <h6 className="commom-label"> { this.props.label } </h6>
    }
}