import React from 'react';
import ProductName from '../product-name/ProductName';

import './style.scss';

export default class RightPanel extends React.Component {
    render() {
        return (
            <div className="base-right-panel">
                <ProductName />
            </div>
        )
    }
}