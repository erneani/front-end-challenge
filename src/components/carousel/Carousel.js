import React from 'react';
import Slider from 'react-slick';
import CommomLabel from '../commom-label/CommomLabel';
import Image from '../header-logo/HeaderLogo';

import './style.scss';

export default class Carousel extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      className: "center",
      lazyLoad: true,
    }
    return (
      <div className="carousel-base">
        <Slider {...settings}>
          <div>
            <Image source="Layer_22.png" />
            <CommomLabel className="vehicles-carousel-title" label="Classe A" />
          </div>
          <div>
            <Image source="Layer_26.png" />
            <CommomLabel className="vehicles-carousel-title" label="Classe C" />
          </div>
          <div>
            <Image source="Layer_27.png" />
            <CommomLabel className="vehicles-carousel-title" label="Classe CLA" />
          </div>
          <div>
            <Image source="Layer_22.png" />
            <CommomLabel className="vehicles-carousel-title" label="Classe A" />
          </div>
          <div>
            <Image source="Layer_26.png" />
            <CommomLabel className="vehicles-carousel-title" label="Classe C" />
          </div>
          <div>
            <Image source="Layer_27.png" />
            <CommomLabel className="vehicles-carousel-title" label="Classe CLA" />
          </div>
          <div>
            <Image source="Layer_26.png" />
            <CommomLabel className="vehicles-carousel-title" label="Classe C" />
          </div>
          <div>
            <Image source="Layer_27.png" />
            <CommomLabel className="vehicles-carousel-title" label="Classe CLA" />
          </div>
          <div>
            <Image source="Layer_22.png" />
            <CommomLabel className="vehicles-carousel-title" label="Classe A" />
          </div>
          <div>
            <Image source="Layer_26.png" />
            <CommomLabel className="vehicles-carousel-title" label="Classe C" />
          </div>
          <div>
            <Image source="Layer_27.png" />
            <CommomLabel className="vehicles-carousel-title" label="Classe CLA" />
          </div>
          <div>
            <Image source="Layer_22.png" />
            <CommomLabel className="vehicles-carousel-title" label="Classe A" />
          </div>
          <div>
            <Image source="Layer_26.png" />
            <CommomLabel className="vehicles-carousel-title" label="Classe C" />
          </div>
          <div>
            <Image source="Layer_27.png" />
            <CommomLabel className="vehicles-carousel-title" label="Classe CLA" />
          </div>
          <div>
            <Image source="Layer_22.png" />
            <CommomLabel className="vehicles-carousel-title" label="Classe A" />
          </div>
        </Slider>
      </div>
    )
  }
}