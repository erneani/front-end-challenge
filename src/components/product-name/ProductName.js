import React from 'react';
import ProductTitle from '../product-title/ProductTitle';
import ProductSubtitle from '../product-subtitle/ProductSubtitle';

import './style.scss';

export default class ProductName extends React.Component {
    render() {
        return (
            <div className="product-container">
                <ProductTitle label="Etios Hatch 2017" />
                <ProductSubtitle label="X 1.3 Manual" />
            </div>
        )
    }
}