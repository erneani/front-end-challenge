import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faPhone } from '@fortawesome/free-solid-svg-icons';

import './style.scss';

export default class CallButton extends React.Component {
    render() {
        return(
            <div className="call-button">
                <FontAwesomeIcon icon={ faPhone } rotation={ 90 }/>  { this.props.label }  <FontAwesomeIcon icon={ faAngleDown } />
            </div>
        )
    }
}