import React from 'react';
import ProductCard from './ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';

//IMPORTS QUE SERAO SUBSTITUIDOS PELA API DEPOIS
import camisetaMobile from "../assets/Mobile/produtos/camiseta.png";
import camisetaTablet from "../assets/Tablet/produtos/camiseta.png";
import camisetaDesktop from "../assets/Desktop/produtos/camiseta.png";

import calcaMobile from "../assets/Mobile/produtos/calca.png";
import calcaTablet from "../assets/Tablet/produtos/calca.png";
import calcaDesktop from "../assets/Desktop/produtos/calca.png";

import tenisMobile from "../assets/Mobile/produtos/tenis.png";
import tenisTablet from "../assets/Tablet/produtos/tenis.png";
import tenisDesktop from "../assets/Desktop/produtos/tenis.png";

import jaquetaJeansMobile from "../assets/Mobile/produtos/jaqueta-jeans.png";
import jaquetaJeansTablet from "../assets/Tablet/produtos/jaqueta-jeans.png";
import jaquetaJeansDesktop from "../assets/Desktop/produtos/jaqueta-jeans.png";

import oculosMobile from "../assets/Mobile/produtos/oculos.png";
import oculosTablet from "../assets/Tablet/produtos/oculos.png";
import oculosDesktop from "../assets/Desktop/produtos/oculos.png";

import bolsaMobile from "../assets/Mobile/produtos/bolsa.png";
import bolsaTablet from "../assets/Tablet/produtos/bolsa.png";
import bolsaDesktop from "../assets/Desktop/produtos/bolsa.png";

const FeaturedProductsGrid = () => {
          //TROCAR ESSE OBJETO "PRODUCTS" PELA API DEPOIS!!!!!!!!!!
    const products = [
        {
          imgSrcMobile: camisetaMobile,
          imgSrcTablet: camisetaTablet,
          imgSrcDesktop: camisetaDesktop,
          title: 'Long T-Shirt',
          altText: 'Image of a caucasian male model wearing a yellow t-shirt with a white wall on the background.',
          price: '$54,00',
        },
        {
          imgSrcMobile: calcaMobile,
          imgSrcTablet: calcaTablet,
          imgSrcDesktop: calcaDesktop,
          title: 'Tailored Pants',
          altText: 'Image of a black female model standind in the desert wearing tailored pants and a brown long t-shirt',
          price: '$54,00',
        },
        {
          imgSrcMobile: tenisMobile,
          imgSrcTablet: tenisTablet,
          imgSrcDesktop: tenisDesktop,
          title: 'Chunky Sneakers',
          altText: 'Image of a model wearing a chunky sneakers stepping on a puddle',
          price: '$54,00',
        },
        {
          imgSrcMobile: jaquetaJeansMobile,
          imgSrcTablet: jaquetaJeansTablet,
          imgSrcDesktop: jaquetaJeansDesktop,
          title: 'Jeans Jacket',
          altText: 'Image of a black male model wearing a blue jeans jacket and a black beanie standing in front of a white wall.',
          price: '$54,00',
        },
        {
          imgSrcMobile: oculosMobile,
          imgSrcTablet: oculosTablet,
          imgSrcDesktop: oculosDesktop,
          title: 'Round Glasses',
          altText: 'Image of a blonde male black model laying on the bed wearing round glasses.',
          price: '$54,00',
        },
        {
          imgSrcMobile: bolsaMobile,
          imgSrcTablet: bolsaTablet,
          imgSrcDesktop: bolsaDesktop,
          title: 'Joker Purse',
          altText: 'Image of a black female model holding a brown purse on the right hand.',
          price: '$54,00',
        }
      ];
      
      //TROCAR ESSE OBJETO "PRODUCTS" PELA API DEPOIS!!!!!!!!!!

  return (
    <div className="container row mx-auto g-4 mt-3">
      {products.map((product, index) => (
        <div key={index} className="col-12 col-md-6 col-xxl-4">
          <ProductCard
            imgSrcMobile={product.imgSrcMobile}
            imgSrcTablet={product.imgSrcTablet}
            imgSrcDesktop={product.imgSrcDesktop}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        </div>
      ))}
    </div>
  );
};

export default FeaturedProductsGrid;
