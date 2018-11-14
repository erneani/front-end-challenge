import React from 'react';
import FormRadio from '../form-radio/FormRadio';

import './style.scss';

export default class FormList extends React.Component {
    render() {
        return (
            <div className="form-list">
                <FormRadio name="parcels" value="parcels" label="12" />
                <FormRadio name="parcels" value="parcels" label="24" />
                <FormRadio name="parcels" value="parcels" label="36" />
                <FormRadio name="parcels" value="parcels" label="48" />
            </div>
        )
    }
}