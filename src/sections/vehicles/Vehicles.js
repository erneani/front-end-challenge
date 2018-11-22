import React from 'react';
import CommomLabel from '../../components/commom-label/CommomLabel';
import Carousel from '../../components/carousel/Carousel';

import './style.scss';

export const Vehicles = () => {
  return(
    <div className="vehicles-base">
      <CommomLabel className="vehicles-title" label="Conheça nossos carros" />
      <div className="vehicles-title-underline"></div>
      <Carousel />
    </div>
  )
}