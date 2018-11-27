import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faPhone } from '@fortawesome/free-solid-svg-icons';
import DropdownListElement from '../call-button-dropdown-list-element/CallButtonDropdownListElement';
import DropdownItem from '../call-button-dropdown-item/CallButtonDropdownItem';
import DropdownList from '../call-button-dropdown-list/CallButtonDropdownList';
import Dropdown from '../call-button-dropdown/CallButtonDropdown';

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

    render() {
        return(
            <div className="call-button-wrapper">
                <div className={"call-button "+(this.state.phoneClick?"phone-clicked":"")} onClick={this.handlePhoneClick}>
                    <FontAwesomeIcon icon={ faPhone } rotation={ 90 }/>  { this.props.label } <FontAwesomeIcon icon={ faAngleDown }/>
                </div>
                <Dropdown className={this.state.dropdownShow? "dropdown-show":""}>
                    <DropdownList>
                        <DropdownItem dropdownItem="Toyota Nações Unidas">
                              <DropdownListElement element="(11) 3500-7909 |" thinElement="Vendas" />
                              <DropdownListElement element="(11) 3500-7909 |" thinElement="Serviços" />
                        </DropdownItem>
                        <DropdownItem dropdownItem="Toyota Nações Unidas">
                              <DropdownListElement element="(11) 3500-7909 |" thinElement="Vendas" />
                              <DropdownListElement element="(11) 3500-7909 |" thinElement="Serviços" />
                        </DropdownItem>
                    </DropdownList>
                </Dropdown>
            </div>
        )
    }
}
