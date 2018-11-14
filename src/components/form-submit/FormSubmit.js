import React from 'react';

import './style.scss';

export default class FormSubmit extends React.Component {
    render() {
        return <input type="submit"
        className="form-submit-button"
        name= { this.props.name }
        value= {this.props.value } />
    }
}