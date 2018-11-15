import React from 'react';

import './style.scss';

export default class ProductTitle extends React.Component {
    render() {
        return <h1 className="product-title"> { this.props.label } </h1>
    }
}