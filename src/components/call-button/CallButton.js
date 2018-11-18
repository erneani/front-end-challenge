import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faPhone } from '@fortawesome/free-solid-svg-icons';

import './style.scss';

export default class CallButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownShow: false,
            phoneClick: false,
            listShow: false,
        }
    }

    handlePhoneClick = () => {
        this.setState({
            dropdownShow: !this.state.dropdownShow,
            phoneClick: !this.state.phoneClick,
        })
    }

    handleListClick = () => {
        this.setState({
            listShow: !this.state.listShow,
        })
        console.log(this.state.listShow);
    }

    render() {
        return(
            <div className="call-button-wrapper">
                <div className={"call-button "+(this.state.phoneClick?"phone-clicked":"")} onClick={this.handlePhoneClick}>
                    <FontAwesomeIcon icon={ faPhone } rotation={ 90 }/>  { this.props.label } <FontAwesomeIcon icon={ faAngleDown }/>
                </div>
                <div className={"call-button-dropdown "+(this.state.dropdownShow?"dropdown-show":"")}>
                    <ul className="dropdown-list">
                        <li className={"dropdown-item "+(this.state.listShow?"dropdown-item-highlight":"")} onClick={this.handleListClick}>
                            Toyota Nações Unidas <FontAwesomeIcon icon={faAngleDown} />
                            <ul className={"dropdown-item-list "+(this.state.listShow?"dropdown-item-show":"")}>
                                <li className="dropdown-item-list-element">
                                    (11) 3500-7909 | Vendas
                                </li>
                                <li className="dropdown-item-list-element">
                                    (11) 3500-7909 | Serviços
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown-item" onClick={this.handleListClick}>
                            Toyota Morumbi <FontAwesomeIcon icon={faAngleDown} />
                            <ul className={"dropdown-item-list "+(this.state.listShow?"dropdown-item-show":"")}>
                                <li className="dropdown-item-list-element">
                                    Hey Jude!
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}