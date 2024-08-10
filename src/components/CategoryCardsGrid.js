import React from 'react';
import CategoryCard from './CategoryCard';
import 'bootstrap/dist/css/bootstrap.min.css';


//TODOS ESSES IMPORTS SERAO EXCLUIDOS QUANDO TROCAR PRA API
import camisaMobile from '../assets/Mobile/categorias/categoria-camiseta.png';
import camisaTablet from '../assets/Tablet/categorias/categoria-camiseta.png';
import camisaDesktop from '../assets/Desktop/categorias/categoria-camiseta.png';

import bolsaMobile from '../assets/Mobile/categorias/categoria-bolsas.png';
import bolsaTablet from '../assets/Tablet/categorias/categoria-bolsas.png';
import bolsaDesktop from '../assets/Desktop/categorias/categoria-bolsa.png';

import calcadoMobile from '../assets/Mobile/categorias/categoria-calcados.png';
import calcadoTablet from '../assets/Tablet/categorias/categoria-calcados.png';
import calcadoDesktop from '../assets/Desktop/categorias/categoria-calcados.png';

import calcaMobile from '../assets/Mobile/categorias/categoria-calcas.png';
import calcaTablet from '../assets/Tablet/categorias/categoria-calcas.png';
import calcaDesktop from '../assets/Desktop/categorias/categoria-calcas.png';

import oculosMobile from '../assets/Mobile/categorias/categoria-oculos.png';
import oculosTablet from '../assets/Tablet/categorias/categoria-oculos.png';
import oculosDesktop from '../assets/Desktop/categorias/categoria-oculos.png';

import casacoMobile from '../assets/Mobile/categorias/categoria-casacos.png';
import casacoTablet from '../assets/Tablet/categorias/categoria-casacos.png';
import casacoDesktop from '../assets/Desktop/categorias/categoria-casacos.png';

const CategoryCardsGrid = () => {
    const categories = [
        {
          imgSrcMobile: camisaMobile,
          imgSrcTablet: camisaTablet,
          imgSrcDesktop: camisaDesktop,
          title: 'T-Shirts',
          altText: 'Image of a unisex green t-shirt with a pocket',
        },
        {
          imgSrcMobile: bolsaMobile,
          imgSrcTablet: bolsaTablet,
          imgSrcDesktop: bolsaDesktop,
          title: 'Purses',
          altText: 'Image of a brown feminine purse',
        },
        {
          imgSrcMobile: calcadoMobile,
          imgSrcTablet: calcadoTablet,
          imgSrcDesktop: calcadoDesktop,
          title: 'Sneakers',
          altText: 'Image of a pair of white sneakers on top of a white box',
        },
        {
          imgSrcMobile: calcaMobile,
          imgSrcTablet: calcaTablet,
          imgSrcDesktop: calcaDesktop,
          title: 'Pants',
          altText: 'Image of 5 jeans pants folded one on top of the other',
        },
        {
          imgSrcMobile: oculosMobile,
          imgSrcTablet: oculosTablet,
          imgSrcDesktop: oculosDesktop,
          title: 'Sunglasses',
          altText: 'Image of a pair of dark sunglasses',
        },
        {
          imgSrcMobile: casacoMobile,
          imgSrcTablet: casacoTablet,
          imgSrcDesktop: casacoDesktop,
          title: 'Jackets',
          altText: 'Image of a brown jacket',
        },
      ];
    // Add more categories as needed
    //We probably gonna switch this by an API return

    return (
        <div className="container">
          <div className="row g-4 mt-3 mx-auto">
            {categories.map((category, index) => (
              <div key={index} className="col-6 col-md-4 col-xxl-2">
                <CategoryCard
                  imgSrcMobile={category.imgSrcMobile}
                  imgSrcTablet={category.imgSrcTablet}
                  imgSrcDesktop={category.imgSrcDesktop}
                  title={category.title}
                  altText={category.altText}
                />
              </div>
            ))}
          </div>
        </div>
      );
    };
    
    export default CategoryCardsGrid;