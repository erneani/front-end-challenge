import React from 'react';
import Bigprice from '../big-price/BigPrice';

import './style.scss';

export default class BigPriceLabel extends React.Component {
  render() {
    return (
      <div className="big-price-label"> 
        { this.props.label } <Bigprice price={ this.props.price } />
      </div>
    )
  }
}