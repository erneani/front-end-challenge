import React from 'react';
import TinyLabel from '../tiny-label/TinyLabel';

import './style.scss';

export default class FormCheckbox extends React.Component {
    render() {
        return(
            <div className="form-checkbox-wrapper">
                <input type="checkbox" name={ this.props.name } value={ this.props.value } />
                <div className="form-checkbox-square"></div>
                <TinyLabel label={ this.props.label } />
            </div>
        )
    }
}