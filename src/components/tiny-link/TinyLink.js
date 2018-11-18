import React from 'react';

import './style.scss';

export default class Tinylink extends React.Component {
    render() {
        return <label className={"tiny-link "+this.props.className}> { this.props.label } </label>
    }
}