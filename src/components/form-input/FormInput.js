import React from 'react';

import './style.scss';

export default class FormInput extends React.Component {
    render() {
        return (
            <input className="form-input"
            name={ this.props.name }
            placeholder={ this.props.placeholder }
            type={ this.props.type }/>
        )
    }
}