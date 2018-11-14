import React from 'react';
import CommomLabel from '../commom-label/CommomLabel';
import FormSelect from '../form-select/FormSelect';
import HorizontalLine from '../horizontal-line/HorizontalLine';
import FormInput from '../form-input/FormInput';
import FormList from '../form-list/FormList';
import FormCheckbox from '../form-checkbox/FormCheckbox';
import FormSubmit from '../form-submit/FormSubmit';
import TinyLink from '../tiny-link/TinyLink';

import './style.scss';

export default class FormBody extends React.Component {
    render() {
        return (
            <div className="form-body">
                <HorizontalLine />
                <CommomLabel label="Escolha uma versão" />
                <FormSelect name="potencies"/>
                <HorizontalLine />
                <FormInput name="username" placeholder="Nome*" type="text" />
                <FormInput name="email" placeholder="E-mail*" type="email" />
                <FormInput name="phone" placeholder="Telefone*" type="tel" />
                <CommomLabel label="Número de parcelas*" />
                <FormList />
                <FormInput name="value" placeholder="Valor de entrada*" type="text" />
                <FormCheckbox name="news" value="new" label="Desejo receber ofertas exclusivas da PG Prime." />
                <FormSubmit value="SIMULAR FINANCIAMENTO" name="simulate" />
                <TinyLink label="Política de privacidade" />
            </div>
        )
    }
}