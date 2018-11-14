import React from 'react';

import './style.scss';

export default class TinyLabel extends React.Component {
    render() {
        return <label className="tiny-label"> { this.props.label } </label>
    }
}