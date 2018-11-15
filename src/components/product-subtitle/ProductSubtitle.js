import React from 'react';

import './style.scss';

export default class ProductSubtitle extends React.Component {
    render() {
        return <h2 className="product-subtitle"> { this.props.label } </h2>
    }
}