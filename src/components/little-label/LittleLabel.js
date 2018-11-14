import React from 'react';

import './style.scss';

export default class LittleLabel extends React.Component {
    render() {
        return <h6 className="little-label"> { this.props.label } </h6>
    }
}