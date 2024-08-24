// Mock API Data for Stores and Categories/Products

// Imports for store images
import store1 from "../assets/AboutUs/Store1.jpg";
import store2 from "../assets/AboutUs/Store2.jpg";

// Imports for category images
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

// Imports for product images
import camisetaMobile from "../assets/Mobile/produtos/camiseta.png";
import camisetaTablet from "../assets/Tablet/produtos/camiseta.png";
import camisetaDesktop from "../assets/Desktop/produtos/camiseta.png";

import produtoCalcaMobile from "../assets/Mobile/produtos/calca.png";
import produtoCalcaTablet from "../assets/Tablet/produtos/calca.png";
import produtoCalcaDesktop from "../assets/Desktop/produtos/calca.png";

import tenisMobile from "../assets/Mobile/produtos/tenis.png";
import tenisTablet from "../assets/Tablet/produtos/tenis.png";
import tenisDesktop from "../assets/Desktop/produtos/tenis.png";

import jaquetaJeansMobile from "../assets/Mobile/produtos/jaqueta-jeans.png";
import jaquetaJeansTablet from "../assets/Tablet/produtos/jaqueta-jeans.png";
import jaquetaJeansDesktop from "../assets/Desktop/produtos/jaqueta-jeans.png";

import produtoOculosMobile from "../assets/Mobile/produtos/oculos.png";
import produtoOculosTablet from "../assets/Tablet/produtos/oculos.png";
import produtoOculosDesktop from "../assets/Desktop/produtos/oculos.png";

import produtoBolsaMobile from "../assets/Mobile/produtos/bolsa.png";
import produtoBolsaTablet from "../assets/Tablet/produtos/bolsa.png";
import produtoBolsaDesktop from "../assets/Desktop/produtos/bolsa.png";

// Imports for T-Shirts category images (to be reused in all categories for now)
import blackTshirtMobile from '../assets/Categories-Tshirt/black-tshirt.jpg';
import blackLightningTshirtMobile from '../assets/Categories-Tshirt/blackLightning-tshirt.jpg';
import daddyTshirtMobile from '../assets/Categories-Tshirt/daddy-tshirt.jpg';
import darkblueTshirtMobile from '../assets/Categories-Tshirt/darkblue-tshirt.jpg';
import greyTshirtMobile from '../assets/Categories-Tshirt/grey-tshirt.jpg';
import lightblueTshirtMobile from '../assets/Categories-Tshirt/lightblue-tshirt.jpg';
import mountainTshirtMobile from '../assets/Categories-Tshirt/mountain-tshirt.jpg';
import pinkTshirtMobile from '../assets/Categories-Tshirt/pink-tshirt.jpg';
import primetimeTshirtMobile from '../assets/Categories-Tshirt/primetime-tshirt.jpg';
import whiteTshirtMobile from '../assets/Categories-Tshirt/white-tshirt.jpg';
import yourDesignTshirtMobile from '../assets/Categories-Tshirt/yourDesign-tshirt.jpg';

// Mock API function to simulate fetching data
export const getStores = () => {
    return Promise.resolve([
        {
            imageSrc: store1,
            storeName: "Beverly Hills",
            location: "Los Angeles, CA",
            id: 1,
        },
        {
            imageSrc: store2,
            storeName: "Chicago",
            location: "Chicago, IL",
            id: 2,
        }
    ]);
};

export const getCategories = () => {
    return Promise.resolve([
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
    ]);
};

//list com os produtos da pagina inicial
export const getProducts = () => {
    return Promise.resolve([
        {
            imgSrcMobile: camisetaMobile,
            imgSrcTablet: camisetaTablet,
            imgSrcDesktop: camisetaDesktop,
            title: 'Long T-Shirt',
            altText: 'Image of a caucasian male model wearing a yellow t-shirt with a white wall on the background.',
            price: '$54,00',
        },
        {
            imgSrcMobile: produtoCalcaMobile,
            imgSrcTablet: produtoCalcaTablet,
            imgSrcDesktop: produtoCalcaDesktop,
            title: 'Tailored Pants',
            altText: 'Image of a black female model standing in the desert wearing tailored pants and a brown long t-shirt',
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
            imgSrcMobile: produtoOculosMobile,
            imgSrcTablet: produtoOculosTablet,
            imgSrcDesktop: produtoOculosDesktop,
            title: 'Round Glasses',
            altText: 'Image of a blonde male black model laying on the bed wearing round glasses.',
            price: '$54,00',
        },
        {
            imgSrcMobile: produtoBolsaMobile,
            imgSrcTablet: produtoBolsaTablet,
            imgSrcDesktop: produtoBolsaDesktop,
            title: 'Joker Purse',
            altText: 'Image of a black female model holding a brown purse on the right hand.',
            price: '$54,00',
        }
    ]);
};


//array com todos os produtos que virao do back (11 produtos para cada categoria)
  const products = {
    "T-Shirts": [
      {
        imgSrcMobile: blackTshirtMobile,
        imgSrcTablet: blackTshirtMobile,
        imgSrcDesktop: blackTshirtMobile,
        title: "Black T-Shirt",
        description: "A stylish black t-shirt",
        price: "$54.00"
      },
      {
        imgSrcMobile: blackLightningTshirtMobile,
        imgSrcTablet: blackLightningTshirtMobile,
        imgSrcDesktop: blackLightningTshirtMobile,
        title: "Black Lightning T-Shirt",
        description: "A bold black t-shirt with lightning design",
        price: "$65.00"
      },
      {
        imgSrcMobile: daddyTshirtMobile,
        imgSrcTablet: daddyTshirtMobile,
        imgSrcDesktop: daddyTshirtMobile,
        title: "Daddy T-Shirt",
        description: "A classic 'Daddy' t-shirt",
        price: "$60.00"
      },
      {
        imgSrcMobile: darkblueTshirtMobile,
        imgSrcTablet: darkblueTshirtMobile,
        imgSrcDesktop: darkblueTshirtMobile,
        title: "Dark Blue T-Shirt",
        description: "A deep blue t-shirt for a stylish look",
        price: "$50.00"
      },
      {
        imgSrcMobile: greyTshirtMobile,
        imgSrcTablet: greyTshirtMobile,
        imgSrcDesktop: greyTshirtMobile,
        title: "Grey T-Shirt",
        description: "A casual grey t-shirt",
        price: "$55.00"
      },
      {
        imgSrcMobile: lightblueTshirtMobile,
        imgSrcTablet: lightblueTshirtMobile,
        imgSrcDesktop: lightblueTshirtMobile,
        title: "Light Blue T-Shirt",
        description: "A soft light blue t-shirt",
        price: "$52.00"
      },
      {
        imgSrcMobile: mountainTshirtMobile,
        imgSrcTablet: mountainTshirtMobile,
        imgSrcDesktop: mountainTshirtMobile,
        title: "Mountain T-Shirt",
        description: "A t-shirt featuring a mountain design",
        price: "$58.00"
      },
      {
        imgSrcMobile: pinkTshirtMobile,
        imgSrcTablet: pinkTshirtMobile,
        imgSrcDesktop: pinkTshirtMobile,
        title: "Pink T-Shirt",
        description: "A cute pink t-shirt",
        price: "$53.00"
      },
      {
        imgSrcMobile: primetimeTshirtMobile,
        imgSrcTablet: primetimeTshirtMobile,
        imgSrcDesktop: primetimeTshirtMobile,
        title: "Primetime T-Shirt",
        description: "A stylish primetime t-shirt",
        price: "$59.00"
      },
      {
        imgSrcMobile: whiteTshirtMobile,
        imgSrcTablet: whiteTshirtMobile,
        imgSrcDesktop: whiteTshirtMobile,
        title: "White T-Shirt",
        description: "A classic white t-shirt",
        price: "$54.00"
      },
      {
        imgSrcMobile: yourDesignTshirtMobile,
        imgSrcTablet: yourDesignTshirtMobile,
        imgSrcDesktop: yourDesignTshirtMobile,
        title: "Your Design T-Shirt",
        description: "A customizable t-shirt for your unique style",
        price: "$60.00"
      }
    ],
    "Purses": [
      {
        imgSrcMobile: blackTshirtMobile,
        imgSrcTablet: blackTshirtMobile,
        imgSrcDesktop: blackTshirtMobile,
        title: "Black T-Shirt",
        description: "A stylish black t-shirt",
        price: "$54.00"
      },
      {
        imgSrcMobile: blackLightningTshirtMobile,
        imgSrcTablet: blackLightningTshirtMobile,
        imgSrcDesktop: blackLightningTshirtMobile,
        title: "Black Lightning T-Shirt",
        description: "A bold black t-shirt with lightning design",
        price: "$65.00"
      },
      {
        imgSrcMobile: daddyTshirtMobile,
        imgSrcTablet: daddyTshirtMobile,
        imgSrcDesktop: daddyTshirtMobile,
        title: "Daddy T-Shirt",
        description: "A classic 'Daddy' t-shirt",
        price: "$60.00"
      },
      {
        imgSrcMobile: darkblueTshirtMobile,
        imgSrcTablet: darkblueTshirtMobile,
        imgSrcDesktop: darkblueTshirtMobile,
        title: "Dark Blue T-Shirt",
        description: "A deep blue t-shirt for a stylish look",
        price: "$50.00"
      },
      {
        imgSrcMobile: greyTshirtMobile,
        imgSrcTablet: greyTshirtMobile,
        imgSrcDesktop: greyTshirtMobile,
        title: "Grey T-Shirt",
        description: "A casual grey t-shirt",
        price: "$55.00"
      },
      {
        imgSrcMobile: lightblueTshirtMobile,
        imgSrcTablet: lightblueTshirtMobile,
        imgSrcDesktop: lightblueTshirtMobile,
        title: "Light Blue T-Shirt",
        description: "A soft light blue t-shirt",
        price: "$52.00"
      },
      {
        imgSrcMobile: mountainTshirtMobile,
        imgSrcTablet: mountainTshirtMobile,
        imgSrcDesktop: mountainTshirtMobile,
        title: "Mountain T-Shirt",
        description: "A t-shirt featuring a mountain design",
        price: "$58.00"
      },
      {
        imgSrcMobile: pinkTshirtMobile,
        imgSrcTablet: pinkTshirtMobile,
        imgSrcDesktop: pinkTshirtMobile,
        title: "Pink T-Shirt",
        description: "A cute pink t-shirt",
        price: "$53.00"
      },
      {
        imgSrcMobile: primetimeTshirtMobile,
        imgSrcTablet: primetimeTshirtMobile,
        imgSrcDesktop: primetimeTshirtMobile,
        title: "Primetime T-Shirt",
        description: "A stylish primetime t-shirt",
        price: "$59.00"
      },
      {
        imgSrcMobile: whiteTshirtMobile,
        imgSrcTablet: whiteTshirtMobile,
        imgSrcDesktop: whiteTshirtMobile,
        title: "White T-Shirt",
        description: "A classic white t-shirt",
        price: "$54.00"
      },
      {
        imgSrcMobile: yourDesignTshirtMobile,
        imgSrcTablet: yourDesignTshirtMobile,
        imgSrcDesktop: yourDesignTshirtMobile,
        title: "Your Design T-Shirt",
        description: "A customizable t-shirt for your unique style",
        price: "$60.00"
      }
    ],
    "Sneakers": [
      {
        imgSrcMobile: blackTshirtMobile,
        imgSrcTablet: blackTshirtMobile,
        imgSrcDesktop: blackTshirtMobile,
        title: "Black T-Shirt",
        description: "A stylish black t-shirt",
        price: "$54.00"
      },
      {
        imgSrcMobile: blackLightningTshirtMobile,
        imgSrcTablet: blackLightningTshirtMobile,
        imgSrcDesktop: blackLightningTshirtMobile,
        title: "Black Lightning T-Shirt",
        description: "A bold black t-shirt with lightning design",
        price: "$65.00"
      },
      {
        imgSrcMobile: daddyTshirtMobile,
        imgSrcTablet: daddyTshirtMobile,
        imgSrcDesktop: daddyTshirtMobile,
        title: "Daddy T-Shirt",
        description: "A classic 'Daddy' t-shirt",
        price: "$60.00"
      },
      {
        imgSrcMobile: darkblueTshirtMobile,
        imgSrcTablet: darkblueTshirtMobile,
        imgSrcDesktop: darkblueTshirtMobile,
        title: "Dark Blue T-Shirt",
        description: "A deep blue t-shirt for a stylish look",
        price: "$50.00"
      },
      {
        imgSrcMobile: greyTshirtMobile,
        imgSrcTablet: greyTshirtMobile,
        imgSrcDesktop: greyTshirtMobile,
        title: "Grey T-Shirt",
        description: "A casual grey t-shirt",
        price: "$55.00"
      },
      {
        imgSrcMobile: lightblueTshirtMobile,
        imgSrcTablet: lightblueTshirtMobile,
        imgSrcDesktop: lightblueTshirtMobile,
        title: "Light Blue T-Shirt",
        description: "A soft light blue t-shirt",
        price: "$52.00"
      },
      {
        imgSrcMobile: mountainTshirtMobile,
        imgSrcTablet: mountainTshirtMobile,
        imgSrcDesktop: mountainTshirtMobile,
        title: "Mountain T-Shirt",
        description: "A t-shirt featuring a mountain design",
        price: "$58.00"
      },
      {
        imgSrcMobile: pinkTshirtMobile,
        imgSrcTablet: pinkTshirtMobile,
        imgSrcDesktop: pinkTshirtMobile,
        title: "Pink T-Shirt",
        description: "A cute pink t-shirt",
        price: "$53.00"
      },
      {
        imgSrcMobile: primetimeTshirtMobile,
        imgSrcTablet: primetimeTshirtMobile,
        imgSrcDesktop: primetimeTshirtMobile,
        title: "Primetime T-Shirt",
        description: "A stylish primetime t-shirt",
        price: "$59.00"
      },
      {
        imgSrcMobile: whiteTshirtMobile,
        imgSrcTablet: whiteTshirtMobile,
        imgSrcDesktop: whiteTshirtMobile,
        title: "White T-Shirt",
        description: "A classic white t-shirt",
        price: "$54.00"
      },
      {
        imgSrcMobile: yourDesignTshirtMobile,
        imgSrcTablet: yourDesignTshirtMobile,
        imgSrcDesktop: yourDesignTshirtMobile,
        title: "Your Design T-Shirt",
        description: "A customizable t-shirt for your unique style",
        price: "$60.00"
      }
    ],
    "Pants": [
      {
        imgSrcMobile: blackTshirtMobile,
        imgSrcTablet: blackTshirtMobile,
        imgSrcDesktop: blackTshirtMobile,
        title: "Black T-Shirt",
        description: "A stylish black t-shirt",
        price: "$54.00"
      },
      {
        imgSrcMobile: blackLightningTshirtMobile,
        imgSrcTablet: blackLightningTshirtMobile,
        imgSrcDesktop: blackLightningTshirtMobile,
        title: "Black Lightning T-Shirt",
        description: "A bold black t-shirt with lightning design",
        price: "$65.00"
      },
      {
        imgSrcMobile: daddyTshirtMobile,
        imgSrcTablet: daddyTshirtMobile,
        imgSrcDesktop: daddyTshirtMobile,
        title: "Daddy T-Shirt",
        description: "A classic 'Daddy' t-shirt",
        price: "$60.00"
      },
      {
        imgSrcMobile: darkblueTshirtMobile,
        imgSrcTablet: darkblueTshirtMobile,
        imgSrcDesktop: darkblueTshirtMobile,
        title: "Dark Blue T-Shirt",
        description: "A deep blue t-shirt for a stylish look",
        price: "$50.00"
      },
      {
        imgSrcMobile: greyTshirtMobile,
        imgSrcTablet: greyTshirtMobile,
        imgSrcDesktop: greyTshirtMobile,
        title: "Grey T-Shirt",
        description: "A casual grey t-shirt",
        price: "$55.00"
      },
      {
        imgSrcMobile: lightblueTshirtMobile,
        imgSrcTablet: lightblueTshirtMobile,
        imgSrcDesktop: lightblueTshirtMobile,
        title: "Light Blue T-Shirt",
        description: "A soft light blue t-shirt",
        price: "$52.00"
      },
      {
        imgSrcMobile: mountainTshirtMobile,
        imgSrcTablet: mountainTshirtMobile,
        imgSrcDesktop: mountainTshirtMobile,
        title: "Mountain T-Shirt",
        description: "A t-shirt featuring a mountain design",
        price: "$58.00"
      },
      {
        imgSrcMobile: pinkTshirtMobile,
        imgSrcTablet: pinkTshirtMobile,
        imgSrcDesktop: pinkTshirtMobile,
        title: "Pink T-Shirt",
        description: "A cute pink t-shirt",
        price: "$53.00"
      },
      {
        imgSrcMobile: primetimeTshirtMobile,
        imgSrcTablet: primetimeTshirtMobile,
        imgSrcDesktop: primetimeTshirtMobile,
        title: "Primetime T-Shirt",
        description: "A stylish primetime t-shirt",
        price: "$59.00"
      },
      {
        imgSrcMobile: whiteTshirtMobile,
        imgSrcTablet: whiteTshirtMobile,
        imgSrcDesktop: whiteTshirtMobile,
        title: "White T-Shirt",
        description: "A classic white t-shirt",
        price: "$54.00"
      },
      {
        imgSrcMobile: yourDesignTshirtMobile,
        imgSrcTablet: yourDesignTshirtMobile,
        imgSrcDesktop: yourDesignTshirtMobile,
        title: "Your Design T-Shirt",
        description: "A customizable t-shirt for your unique style",
        price: "$60.00"
      }
    ],
    "Sunglasses": [
      {
        imgSrcMobile: blackTshirtMobile,
        imgSrcTablet: blackTshirtMobile,
        imgSrcDesktop: blackTshirtMobile,
        title: "Black T-Shirt",
        description: "A stylish black t-shirt",
        price: "$54.00"
      },
      {
        imgSrcMobile: blackLightningTshirtMobile,
        imgSrcTablet: blackLightningTshirtMobile,
        imgSrcDesktop: blackLightningTshirtMobile,
        title: "Black Lightning T-Shirt",
        description: "A bold black t-shirt with lightning design",
        price: "$65.00"
      },
      {
        imgSrcMobile: daddyTshirtMobile,
        imgSrcTablet: daddyTshirtMobile,
        imgSrcDesktop: daddyTshirtMobile,
        title: "Daddy T-Shirt",
        description: "A classic 'Daddy' t-shirt",
        price: "$60.00"
      },
      {
        imgSrcMobile: darkblueTshirtMobile,
        imgSrcTablet: darkblueTshirtMobile,
        imgSrcDesktop: darkblueTshirtMobile,
        title: "Dark Blue T-Shirt",
        description: "A deep blue t-shirt for a stylish look",
        price: "$50.00"
      },
      {
        imgSrcMobile: greyTshirtMobile,
        imgSrcTablet: greyTshirtMobile,
        imgSrcDesktop: greyTshirtMobile,
        title: "Grey T-Shirt",
        description: "A casual grey t-shirt",
        price: "$55.00"
      },
      {
        imgSrcMobile: lightblueTshirtMobile,
        imgSrcTablet: lightblueTshirtMobile,
        imgSrcDesktop: lightblueTshirtMobile,
        title: "Light Blue T-Shirt",
        description: "A soft light blue t-shirt",
        price: "$52.00"
      },
      {
        imgSrcMobile: mountainTshirtMobile,
        imgSrcTablet: mountainTshirtMobile,
        imgSrcDesktop: mountainTshirtMobile,
        title: "Mountain T-Shirt",
        description: "A t-shirt featuring a mountain design",
        price: "$58.00"
      },
      {
        imgSrcMobile: pinkTshirtMobile,
        imgSrcTablet: pinkTshirtMobile,
        imgSrcDesktop: pinkTshirtMobile,
        title: "Pink T-Shirt",
        description: "A cute pink t-shirt",
        price: "$53.00"
      },
      {
        imgSrcMobile: primetimeTshirtMobile,
        imgSrcTablet: primetimeTshirtMobile,
        imgSrcDesktop: primetimeTshirtMobile,
        title: "Primetime T-Shirt",
        description: "A stylish primetime t-shirt",
        price: "$59.00"
      },
      {
        imgSrcMobile: whiteTshirtMobile,
        imgSrcTablet: whiteTshirtMobile,
        imgSrcDesktop: whiteTshirtMobile,
        title: "White T-Shirt",
        description: "A classic white t-shirt",
        price: "$54.00"
      },
      {
        imgSrcMobile: yourDesignTshirtMobile,
        imgSrcTablet: yourDesignTshirtMobile,
        imgSrcDesktop: yourDesignTshirtMobile,
        title: "Your Design T-Shirt",
        description: "A customizable t-shirt for your unique style",
        price: "$60.00"
      }
    ],
    "Jackets": [
      {
        imgSrcMobile: blackTshirtMobile,
        imgSrcTablet: blackTshirtMobile,
        imgSrcDesktop: blackTshirtMobile,
        title: "Black T-Shirt",
        description: "A stylish black t-shirt",
        price: "$54.00"
      },
      {
        imgSrcMobile: blackLightningTshirtMobile,
        imgSrcTablet: blackLightningTshirtMobile,
        imgSrcDesktop: blackLightningTshirtMobile,
        title: "Black Lightning T-Shirt",
        description: "A bold black t-shirt with lightning design",
        price: "$65.00"
      },
      {
        imgSrcMobile: daddyTshirtMobile,
        imgSrcTablet: daddyTshirtMobile,
        imgSrcDesktop: daddyTshirtMobile,
        title: "Daddy T-Shirt",
        description: "A classic 'Daddy' t-shirt",
        price: "$60.00"
      },
      {
        imgSrcMobile: darkblueTshirtMobile,
        imgSrcTablet: darkblueTshirtMobile,
        imgSrcDesktop: darkblueTshirtMobile,
        title: "Dark Blue T-Shirt",
        description: "A deep blue t-shirt for a stylish look",
        price: "$50.00"
      },
      {
        imgSrcMobile: greyTshirtMobile,
        imgSrcTablet: greyTshirtMobile,
        imgSrcDesktop: greyTshirtMobile,
        title: "Grey T-Shirt",
        description: "A casual grey t-shirt",
        price: "$55.00"
      },
      {
        imgSrcMobile: lightblueTshirtMobile,
        imgSrcTablet: lightblueTshirtMobile,
        imgSrcDesktop: lightblueTshirtMobile,
        title: "Light Blue T-Shirt",
        description: "A soft light blue t-shirt",
        price: "$52.00"
      },
      {
        imgSrcMobile: mountainTshirtMobile,
        imgSrcTablet: mountainTshirtMobile,
        imgSrcDesktop: mountainTshirtMobile,
        title: "Mountain T-Shirt",
        description: "A t-shirt featuring a mountain design",
        price: "$58.00"
      },
      {
        imgSrcMobile: pinkTshirtMobile,
        imgSrcTablet: pinkTshirtMobile,
        imgSrcDesktop: pinkTshirtMobile,
        title: "Pink T-Shirt",
        description: "A cute pink t-shirt",
        price: "$53.00"
      },
      {
        imgSrcMobile: primetimeTshirtMobile,
        imgSrcTablet: primetimeTshirtMobile,
        imgSrcDesktop: primetimeTshirtMobile,
        title: "Primetime T-Shirt",
        description: "A stylish primetime t-shirt",
        price: "$59.00"
      },
      {
        imgSrcMobile: whiteTshirtMobile,
        imgSrcTablet: whiteTshirtMobile,
        imgSrcDesktop: whiteTshirtMobile,
        title: "White T-Shirt",
        description: "A classic white t-shirt",
        price: "$54.00"
      },
      {
        imgSrcMobile: yourDesignTshirtMobile,
        imgSrcTablet: yourDesignTshirtMobile,
        imgSrcDesktop: yourDesignTshirtMobile,
        title: "Your Design T-Shirt",
        description: "A customizable t-shirt for your unique style",
        price: "$60.00"
      }
    ]
  };
//isso deve facilitar minha vida na hora de passar as categorias
  const productCategories = {
    "t-shirts": "T-Shirts",
    "purses": "Purses",
    "sneakers": "Sneakers",
    "pants": "Pants",
    "sunglasses": "Sunglasses",
    "jackets": "Jackets"
  };

  export const getCategoryProducts = async (categoryName) => {
    return new Promise((resolve) => {
      const mappedCategory = productCategories[categoryName.toLowerCase()]; // Look up the standard category name
      console.log(`Mapped Category: ${mappedCategory}`);
      if (mappedCategory) {
        resolve(products[mappedCategory] || []);
      } else {
        resolve([]); // If the category name is not found, resolve with an empty array
      }
    });
  };
  