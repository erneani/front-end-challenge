import React from 'react';
import BigPriceLabel from '../big-price-label/BigPriceLabel';
import LargeLabel from '../large-label/LargeLabel';
import WarningLabel from '../warning-label/WarningLabel';

import './style.scss';

export default class PriceContainer extends React.Component {
  render() {
    return (
      <div className="price-container">
        <LargeLabel label="de R$44.120,00" />
        <BigPriceLabel label="por R$" price="40.987,00" />
        <WarningLabel warning="*Consulte as Condições Comerciais." />
      </div>
    )
  }
}