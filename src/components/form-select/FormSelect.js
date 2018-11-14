import React from 'react';

import './style.scss';

export default class FormSelect extends React.Component {
    render() {
        return (
            <select className="form-select" name={ this.props.name }>
                <option value="1.0">1.0</option>
                <option value="1.4">1.4</option>
                <option value="1.8" defaultValue>1.8</option>
            </select>
        )
    }
}