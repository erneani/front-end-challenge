import React from 'react';
import TitleLabel from '../title-label/TitleLabel';
import LittleLabel from '../little-label/LittleLabel';

import './style.scss';

export default class FormTop extends React.Component {
    render() {
        return(
            <div className="form-top">
                <TitleLabel label="SIMULAR FINANCIAMENTO" />
                <LittleLabel label="Escolha a parcela que cabe no seu bolso" />
            </div>
        )
    }
}