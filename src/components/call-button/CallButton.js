import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faPhone } from '@fortawesome/free-solid-svg-icons';

import './style.scss';

export default class CallButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownShow: false,
        }
    }

    handlePhoneClick = () => {
        this.setState({
            dropdownShow: !this.state.dropdownShow,
        })
        console.log(this.state.dropdownShow);
    }

    render() {
        return(
            <div className="call-button-wrapper">
                <div className="call-button" onClick={this.handlePhoneClick}>
                    <FontAwesomeIcon icon={ faPhone } rotation={ 90 }/>  { this.props.label } <FontAwesomeIcon icon={ faAngleDown } />
                </div>
                <div className={"call-button-dropdown "+(this.state.dropdownShow?"dropdown-show":"")}>

                </div>
            </div>
        )
    }
}