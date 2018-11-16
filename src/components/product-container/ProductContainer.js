import React from 'react';
import ProductTitle from '../product-title/ProductTitle';
import ProductSubtitle from '../product-subtitle/ProductSubtitle';

import './style.scss';

export default class ProductContainer extends React.Component {
    render() {
        return (
            <div className="product-container">
                <ProductTitle label="Renault Sandero 2017" />
                <ProductSubtitle label="X 1.3 Manual" />
            </div>
        )
    }
}