import React from 'react';
import Form from '../form/Form';

import './style.scss';

export default class LeftPanel extends React.Component {
    render() {
        return (
            <div className="base-left-panel">
                <Form method="post" />
            </div>
        )
    }
}