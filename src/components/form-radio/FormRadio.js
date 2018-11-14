import React from 'react';

import './style.scss';

export default class FormRadio extends React.Component {
    render() {
        return (
            <div className="form-radio-wrapper">
                <input className="form-radio-input" type="radio" name={ this.props.name } value= {this.props.value } />
                <div className="form-radio-circle"></div>
                <label className="form-radio-label">{ this.props.label }</label>
            </div>
        )
    }
}