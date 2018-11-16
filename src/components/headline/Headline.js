import React from 'react';
import ProductContainer from '../product-container/ProductContainer';
import LargeLabel from '../large-label/LargeLabel';

import './style.scss';

export default class Headline extends React.Component {
  render() {
    return(
      <div className="headline">
        <ProductContainer />
        <LargeLabel label="Você tem mais para descobrir." />
      </div>
    )
  }
}