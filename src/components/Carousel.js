import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner1Mobile from '../assets/Mobile/banner1-mobile.png';
import banner1Tablet from '../assets/Tablet/banner1-tablet.png';
import banner1Desktop from '../assets/Desktop/banner1-desktop.png';
import banner2Mobile from '../assets/Mobile/banner2-mobile.png';
import banner2Tablet from '../assets/Tablet/banner2-tablet.png';
import banner2Desktop from '../assets/Desktop/banner2-desktop.png';
import banner3Mobile from '../assets/Mobile/banner3-mobile.png';
import banner3Tablet from '../assets/Tablet/banner3-tablet.png';
import banner3Desktop from '../assets/Desktop/banner3-desktop.png';

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <picture>
          <source media="(min-width: 1200px)" srcSet={banner1Desktop} />
          <source media="(min-width: 768px)" srcSet={banner1Tablet} />
          <img src={banner1Mobile} alt="Banner 1" className="d-block w-100" />
        </picture>
      </Carousel.Item>

      <Carousel.Item>
        <picture>
          <source media="(min-width: 1200px)" srcSet={banner2Desktop} />
          <source media="(min-width: 768px)" srcSet={banner2Tablet} />
          <img src={banner2Mobile} alt="Banner 2" className="d-block w-100" />
        </picture>
        <Carousel.Caption>
          <h5>TIMELESS COLLECTION</h5>
          <p>Style and quality to last.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <picture>
          <source media="(min-width: 1200px)" srcSet={banner3Desktop} />
          <source media="(min-width: 768px)" srcSet={banner3Tablet} />
          <img src={banner3Mobile} alt="Banner 3" className="d-block w-100" />
        </picture>
        <Carousel.Caption>
          <h5>TIMELESS COLLECTION</h5>
          <p>High visual impact, low environmental impact!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
