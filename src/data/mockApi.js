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

//IMPORT DA FOTO DE USERS
import JonatasFoto from "../assets/JONATAS-LINDO.jpeg"

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
            id:1,
            imgSrcMobile: camisetaMobile,
            imgSrcTablet: camisetaTablet,
            imgSrcDesktop: camisetaDesktop,
            title: 'Long T-Shirt',
            altText: 'Image of a caucasian male model wearing a yellow t-shirt with a white wall on the background.',
            price: '$54,00',
        },
        {
            id:2,
            imgSrcMobile: produtoCalcaMobile,
            imgSrcTablet: produtoCalcaTablet,
            imgSrcDesktop: produtoCalcaDesktop,
            title: 'Tailored Pants',
            altText: 'Image of a black female model standing in the desert wearing tailored pants and a brown long t-shirt',
            price: '$54,00',
        },
        {
            id:3,
            imgSrcMobile: tenisMobile,
            imgSrcTablet: tenisTablet,
            imgSrcDesktop: tenisDesktop,
            title: 'Chunky Sneakers',
            altText: 'Image of a model wearing a chunky sneakers stepping on a puddle',
            price: '$54,00',
        },
        {
            id:4,
            imgSrcMobile: jaquetaJeansMobile,
            imgSrcTablet: jaquetaJeansTablet,
            imgSrcDesktop: jaquetaJeansDesktop,
            title: 'Jeans Jacket',
            altText: 'Image of a black male model wearing a blue jeans jacket and a black beanie standing in front of a white wall.',
            price: '$54,00',
        },
        {
            id:5,
            imgSrcMobile: produtoOculosMobile,
            imgSrcTablet: produtoOculosTablet,
            imgSrcDesktop: produtoOculosDesktop,
            title: 'Round Glasses',
            altText: 'Image of a blonde male black model laying on the bed wearing round glasses.',
            price: '$54,00',
        },
        {
            id:6,
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
        id: "tshirt1",
        imgSrcMobile: blackTshirtMobile,
        imgSrcTablet: blackTshirtMobile,
        imgSrcDesktop: blackTshirtMobile,
        title: "Classic Black T-Shirt",
        description: "A comfortable black t-shirt for everyday wear.",
        price: "$49.99"
      },
      {
        id: "tshirt2",
        imgSrcMobile: blackLightningTshirtMobile,
        imgSrcTablet: blackLightningTshirtMobile,
        imgSrcDesktop: blackLightningTshirtMobile,
        title: "Black Lightning T-Shirt",
        description: "A bold t-shirt with an electrifying design.",
        price: "$65.00"
      },
      {
        id: "tshirt3",
        imgSrcMobile: daddyTshirtMobile,
        imgSrcTablet: daddyTshirtMobile,
        imgSrcDesktop: daddyTshirtMobile,
        title: "Daddy T-Shirt",
        description: "A playful and casual daddy tee.",
        price: "$60.00"
      },
      {
        id: "tshirt4",
        imgSrcMobile: darkblueTshirtMobile,
        imgSrcTablet: darkblueTshirtMobile,
        imgSrcDesktop: darkblueTshirtMobile,
        title: "Dark Blue T-Shirt",
        description: "A deep blue t-shirt for a casual stylish look.",
        price: "$50.00"
      },
      {
        id: "tshirt5",
        imgSrcMobile: greyTshirtMobile,
        imgSrcTablet: greyTshirtMobile,
        imgSrcDesktop: greyTshirtMobile,
        title: "Casual Grey T-Shirt",
        description: "A casual grey t-shirt for any occasion.",
        price: "$55.00"
      },
      {
        id: "tshirt6",
        imgSrcMobile: lightblueTshirtMobile,
        imgSrcTablet: lightblueTshirtMobile,
        imgSrcDesktop: lightblueTshirtMobile,
        title: "Light Blue T-Shirt",
        description: "A soft and breathable light blue t-shirt.",
        price: "$52.00"
      },
      {
        id: "tshirt7",
        imgSrcMobile: mountainTshirtMobile,
        imgSrcTablet: mountainTshirtMobile,
        imgSrcDesktop: mountainTshirtMobile,
        title: "Mountain T-Shirt",
        description: "A nature-inspired t-shirt with a mountain design.",
        price: "$58.00"
      },
      {
        id: "tshirt8",
        imgSrcMobile: pinkTshirtMobile,
        imgSrcTablet: pinkTshirtMobile,
        imgSrcDesktop: pinkTshirtMobile,
        title: "Pink T-Shirt",
        description: "A bright and fun pink t-shirt for any wardrobe.",
        price: "$53.00"
      },
      {
        id: "tshirt9",
        imgSrcMobile: primetimeTshirtMobile,
        imgSrcTablet: primetimeTshirtMobile,
        imgSrcDesktop: primetimeTshirtMobile,
        title: "Primetime T-Shirt",
        description: "A bold primetime t-shirt for standout style.",
        price: "$59.00"
      },
      {
        id: "tshirt10",
        imgSrcMobile: whiteTshirtMobile,
        imgSrcTablet: whiteTshirtMobile,
        imgSrcDesktop: whiteTshirtMobile,
        title: "White T-Shirt",
        description: "A classic white t-shirt for versatile styling.",
        price: "$54.00"
      },
      {
        id: "tshirt11",
        imgSrcMobile: yourDesignTshirtMobile,
        imgSrcTablet: yourDesignTshirtMobile,
        imgSrcDesktop: yourDesignTshirtMobile,
        title: "Customizable T-Shirt",
        description: "Design your own unique t-shirt with this option.",
        price: "$60.00"
      }
    ],
    "Purses": [
      {
        id: "purse1",
        imgSrcMobile: blackTshirtMobile,
        imgSrcTablet: blackTshirtMobile,
        imgSrcDesktop: blackTshirtMobile,
        title: "Elegant Leather Purse",
        description: "A premium leather purse for all occasions.",
        price: "$120.00"
      },
      {
        id: "purse2",
        imgSrcMobile: blackLightningTshirtMobile,
        imgSrcTablet: blackLightningTshirtMobile,
        imgSrcDesktop: blackLightningTshirtMobile,
        title: "Classic Handbag",
        description: "A stylish handbag perfect for day and night.",
        price: "$135.00"
      },
      {
        id: "purse3",
        imgSrcMobile: daddyTshirtMobile,
        imgSrcTablet: daddyTshirtMobile,
        imgSrcDesktop: daddyTshirtMobile,
        title: "Casual Tote Bag",
        description: "A lightweight tote bag for everyday use.",
        price: "$95.00"
      },
      {
        id: "purse4",
        imgSrcMobile: darkblueTshirtMobile,
        imgSrcTablet: darkblueTshirtMobile,
        imgSrcDesktop: darkblueTshirtMobile,
        title: "Deep Blue Satchel",
        description: "A durable satchel bag with a chic design.",
        price: "$150.00"
      },
      {
        id: "purse5",
        imgSrcMobile: greyTshirtMobile,
        imgSrcTablet: greyTshirtMobile,
        imgSrcDesktop: greyTshirtMobile,
        title: "Grey Evening Clutch",
        description: "An elegant clutch for evening events.",
        price: "$80.00"
      },
      {
        id: "purse6",
        imgSrcMobile: lightblueTshirtMobile,
        imgSrcTablet: lightblueTshirtMobile,
        imgSrcDesktop: lightblueTshirtMobile,
        title: "Light Blue Crossbody Bag",
        description: "A convenient and stylish crossbody bag.",
        price: "$110.00"
      },
      {
        id: "purse7",
        imgSrcMobile: mountainTshirtMobile,
        imgSrcTablet: mountainTshirtMobile,
        imgSrcDesktop: mountainTshirtMobile,
        title: "Mountain Print Backpack",
        description: "A functional backpack with a unique print.",
        price: "$85.00"
      },
      {
        id: "purse8",
        imgSrcMobile: pinkTshirtMobile,
        imgSrcTablet: pinkTshirtMobile,
        imgSrcDesktop: pinkTshirtMobile,
        title: "Pink Shoulder Bag",
        description: "A vibrant pink shoulder bag for bold style.",
        price: "$120.00"
      },
      {
        id: "purse9",
        imgSrcMobile: primetimeTshirtMobile,
        imgSrcTablet: primetimeTshirtMobile,
        imgSrcDesktop: primetimeTshirtMobile,
        title: "Primetime Tote",
        description: "A sleek tote bag for work and play.",
        price: "$105.00"
      },
      {
        id: "purse10",
        imgSrcMobile: whiteTshirtMobile,
        imgSrcTablet: whiteTshirtMobile,
        imgSrcDesktop: whiteTshirtMobile,
        title: "White Quilted Purse",
        description: "A sophisticated quilted purse for a polished look.",
        price: "$140.00"
      },
      {
        id: "purse11",
        imgSrcMobile: yourDesignTshirtMobile,
        imgSrcTablet: yourDesignTshirtMobile,
        imgSrcDesktop: yourDesignTshirtMobile,
        title: "Customizable Purse",
        description: "Design your own personalized purse.",
        price: "$160.00"
      }
    ],
    "Sneakers": [
      {
        id: "sneaker1",
        imgSrcMobile: blackTshirtMobile,
        imgSrcTablet: blackTshirtMobile,
        imgSrcDesktop: blackTshirtMobile,
        title: "Black Running Sneakers",
        description: "Comfortable black sneakers for running.",
        price: "$89.99"
      },
      {
        id: "sneaker2",
        imgSrcMobile: blackLightningTshirtMobile,
        imgSrcTablet: blackLightningTshirtMobile,
        imgSrcDesktop: blackLightningTshirtMobile,
        title: "Lightning Sport Sneakers",
        description: "Sleek sneakers with a lightning design.",
        price: "$120.00"
      },
      {
        id: "sneaker3",
        imgSrcMobile: daddyTshirtMobile,
        imgSrcTablet: daddyTshirtMobile,
        imgSrcDesktop: daddyTshirtMobile,
        title: "Daddy Casual Sneakers",
        description: "Comfortable sneakers for casual wear.",
        price: "$75.00"
      },
      {
        id: "sneaker4",
        imgSrcMobile: darkblueTshirtMobile,
        imgSrcTablet: darkblueTshirtMobile,
        imgSrcDesktop: darkblueTshirtMobile,
        title: "Dark Blue High-Tops",
        description: "Stylish high-top sneakers for a modern look.",
        price: "$95.00"
      },
      {
        id: "sneaker5",
        imgSrcMobile: greyTshirtMobile,
        imgSrcTablet: greyTshirtMobile,
        imgSrcDesktop: greyTshirtMobile,
        title: "Grey Slip-On Sneakers",
        description: "Convenient and stylish slip-on sneakers.",
        price: "$80.00"
      },
      {
        id: "sneaker6",
        imgSrcMobile: lightblueTshirtMobile,
        imgSrcTablet: lightblueTshirtMobile,
        imgSrcDesktop: lightblueTshirtMobile,
        title: "Light Blue Running Shoes",
        description: "Breathable running shoes for daily exercise.",
        price: "$110.00"
      },
      {
        id: "sneaker7",
        imgSrcMobile: mountainTshirtMobile,
        imgSrcTablet: mountainTshirtMobile,
        imgSrcDesktop: mountainTshirtMobile,
        title: "Mountain Trail Sneakers",
        description: "Durable sneakers for hiking and trails.",
        price: "$125.00"
      },
      {
        id: "sneaker8",
        imgSrcMobile: pinkTshirtMobile,
        imgSrcTablet: pinkTshirtMobile,
        imgSrcDesktop: pinkTshirtMobile,
        title: "Pink Sports Sneakers",
        description: "Bright pink sneakers for active women.",
        price: "$95.00"
      },
      {
        id: "sneaker9",
        imgSrcMobile: primetimeTshirtMobile,
        imgSrcTablet: primetimeTshirtMobile,
        imgSrcDesktop: primetimeTshirtMobile,
        title: "Primetime Basketball Shoes",
        description: "High-performance sneakers for basketball.",
        price: "$140.00"
      },
      {
        id: "sneaker10",
        imgSrcMobile: whiteTshirtMobile,
        imgSrcTablet: whiteTshirtMobile,
        imgSrcDesktop: whiteTshirtMobile,
        title: "White Classic Sneakers",
        description: "Classic white sneakers for casual style.",
        price: "$80.00"
      },
      {
        id: "sneaker11",
        imgSrcMobile: yourDesignTshirtMobile,
        imgSrcTablet: yourDesignTshirtMobile,
        imgSrcDesktop: yourDesignTshirtMobile,
        title: "Customizable Sneakers",
        description: "Design your own custom sneakers.",
        price: "$160.00"
      }
    ],
    "Pants": [
      {
        id: "pants1",
        imgSrcMobile: blackTshirtMobile,
        imgSrcTablet: blackTshirtMobile,
        imgSrcDesktop: blackTshirtMobile,
        title: "Black Joggers",
        description: "Comfortable joggers for lounging or workout.",
        price: "$55.00"
      },
      {
        id: "pants2",
        imgSrcMobile: blackLightningTshirtMobile,
        imgSrcTablet: blackLightningTshirtMobile,
        imgSrcDesktop: blackLightningTshirtMobile,
        title: "Lightning Print Pants",
        description: "Stylish pants with a lightning print design.",
        price: "$75.00"
      },
      {
        id: "pants3",
        imgSrcMobile: daddyTshirtMobile,
        imgSrcTablet: daddyTshirtMobile,
        imgSrcDesktop: daddyTshirtMobile,
        title: "Daddy Casual Trousers",
        description: "Classic casual trousers for a relaxed style.",
        price: "$60.00"
      },
      {
        id: "pants4",
        imgSrcMobile: darkblueTshirtMobile,
        imgSrcTablet: darkblueTshirtMobile,
        imgSrcDesktop: darkblueTshirtMobile,
        title: "Dark Blue Slim Pants",
        description: "Slim-fit pants for modern men.",
        price: "$85.00"
      },
      {
        id: "pants5",
        imgSrcMobile: greyTshirtMobile,
        imgSrcTablet: greyTshirtMobile,
        imgSrcDesktop: greyTshirtMobile,
        title: "Grey Cargo Pants",
        description: "Utility cargo pants with multiple pockets.",
        price: "$70.00"
      },
      {
        id: "pants6",
        imgSrcMobile: lightblueTshirtMobile,
        imgSrcTablet: lightblueTshirtMobile,
        imgSrcDesktop: lightblueTshirtMobile,
        title: "Light Blue Jeans",
        description: "Classic denim jeans for casual wear.",
        price: "$65.00"
      },
      {
        id: "pants7",
        imgSrcMobile: mountainTshirtMobile,
        imgSrcTablet: mountainTshirtMobile,
        imgSrcDesktop: mountainTshirtMobile,
        title: "Mountain Hiker Pants",
        description: "Durable pants for hiking and outdoor activities.",
        price: "$95.00"
      },
      {
        id: "pants8",
        imgSrcMobile: pinkTshirtMobile,
        imgSrcTablet: pinkTshirtMobile,
        imgSrcDesktop: pinkTshirtMobile,
        title: "Pink Yoga Pants",
        description: "Comfortable yoga pants for active women.",
        price: "$50.00"
      },
      {
        id: "pants9",
        imgSrcMobile: primetimeTshirtMobile,
        imgSrcTablet: primetimeTshirtMobile,
        imgSrcDesktop: primetimeTshirtMobile,
        title: "Primetime Track Pants",
        description: "High-performance track pants for athletes.",
        price: "$85.00"
      },
      {
        id: "pants10",
        imgSrcMobile: whiteTshirtMobile,
        imgSrcTablet: whiteTshirtMobile,
        imgSrcDesktop: whiteTshirtMobile,
        title: "White Dress Pants",
        description: "Elegant dress pants for formal occasions.",
        price: "$90.00"
      },
      {
        id: "pants11",
        imgSrcMobile: yourDesignTshirtMobile,
        imgSrcTablet: yourDesignTshirtMobile,
        imgSrcDesktop: yourDesignTshirtMobile,
        title: "Customizable Pants",
        description: "Design your own pair of custom pants.",
        price: "$100.00"
      }
    ],
    "Sunglasses": [
      {
        id: "sunglass1",
        imgSrcMobile: blackTshirtMobile,
        imgSrcTablet: blackTshirtMobile,
        imgSrcDesktop: blackTshirtMobile,
        title: "Black Aviators",
        description: "Classic aviator sunglasses for a timeless look.",
        price: "$45.00"
      },
      {
        id: "sunglass2",
        imgSrcMobile: blackLightningTshirtMobile,
        imgSrcTablet: blackLightningTshirtMobile,
        imgSrcDesktop: blackLightningTshirtMobile,
        title: "Lightning Sunglasses",
        description: "Bold sunglasses with a lightning design.",
        price: "$55.00"
      },
      {
        id: "sunglass3",
        imgSrcMobile: daddyTshirtMobile,
        imgSrcTablet: daddyTshirtMobile,
        imgSrcDesktop: daddyTshirtMobile,
        title: "Daddy Round Sunglasses",
        description: "Vintage-inspired round sunglasses.",
        price: "$50.00"
      },
      {
        id: "sunglass4",
        imgSrcMobile: darkblueTshirtMobile,
        imgSrcTablet: darkblueTshirtMobile,
        imgSrcDesktop: darkblueTshirtMobile,
        title: "Dark Blue Polarized",
        description: "Polarized sunglasses for UV protection.",
        price: "$70.00"
      },
      {
        id: "sunglass5",
        imgSrcMobile: greyTshirtMobile,
        imgSrcTablet: greyTshirtMobile,
        imgSrcDesktop: greyTshirtMobile,
        title: "Grey Sport Sunglasses",
        description: "Durable sunglasses for outdoor activities.",
        price: "$65.00"
      },
      {
        id: "sunglass6",
        imgSrcMobile: lightblueTshirtMobile,
        imgSrcTablet: lightblueTshirtMobile,
        imgSrcDesktop: lightblueTshirtMobile,
        title: "Light Blue Cat-Eyes",
        description: "Chic cat-eye sunglasses for stylish women.",
        price: "$80.00"
      },
      {
        id: "sunglass7",
        imgSrcMobile: mountainTshirtMobile,
        imgSrcTablet: mountainTshirtMobile,
        imgSrcDesktop: mountainTshirtMobile,
        title: "Mountain Sunglasses",
        description: "Sunglasses built for adventure.",
        price: "$90.00"
      },
      {
        id: "sunglass8",
        imgSrcMobile: pinkTshirtMobile,
        imgSrcTablet: pinkTshirtMobile,
        imgSrcDesktop: pinkTshirtMobile,
        title: "Pink Fashion Sunglasses",
        description: "Bold pink sunglasses for trendy looks.",
        price: "$65.00"
      },
      {
        id: "sunglass9",
        imgSrcMobile: primetimeTshirtMobile,
        imgSrcTablet: primetimeTshirtMobile,
        imgSrcDesktop: primetimeTshirtMobile,
        title: "Primetime Foldable Sunglasses",
        description: "Compact foldable sunglasses for travel.",
        price: "$75.00"
      },
      {
        id: "sunglass10",
        imgSrcMobile: whiteTshirtMobile,
        imgSrcTablet: whiteTshirtMobile,
        imgSrcDesktop: whiteTshirtMobile,
        title: "White Oversized Sunglasses",
        description: "Oversized sunglasses for extra sun protection.",
        price: "$85.00"
      },
      {
        id: "sunglass11",
        imgSrcMobile: yourDesignTshirtMobile,
        imgSrcTablet: yourDesignTshirtMobile,
        imgSrcDesktop: yourDesignTshirtMobile,
        title: "Customizable Sunglasses",
        description: "Create your own unique pair of sunglasses.",
        price: "$100.00"
      }
    ],
    "Jackets": [
      {
        id: "jacket1",
        imgSrcMobile: blackTshirtMobile,
        imgSrcTablet: blackTshirtMobile,
        imgSrcDesktop: blackTshirtMobile,
        title: "Black Leather Jacket",
        description: "A classic black leather jacket for any season.",
        price: "$200.00"
      },
      {
        id: "jacket2",
        imgSrcMobile: blackLightningTshirtMobile,
        imgSrcTablet: blackLightningTshirtMobile,
        imgSrcDesktop: blackLightningTshirtMobile,
        title: "Lightning Denim Jacket",
        description: "A trendy denim jacket with a lightning design.",
        price: "$130.00"
      },
      {
        id: "jacket3",
        imgSrcMobile: daddyTshirtMobile,
        imgSrcTablet: daddyTshirtMobile,
        imgSrcDesktop: daddyTshirtMobile,
        title: "Daddy Bomber Jacket",
        description: "A casual bomber jacket for stylish dads.",
        price: "$140.00"
      },
      {
        id: "jacket4",
        imgSrcMobile: darkblueTshirtMobile,
        imgSrcTablet: darkblueTshirtMobile,
        imgSrcDesktop: darkblueTshirtMobile,
        title: "Dark Blue Puffer Jacket",
        description: "A warm puffer jacket for cold weather.",
        price: "$180.00"
      },
      {
        id: "jacket5",
        imgSrcMobile: greyTshirtMobile,
        imgSrcTablet: greyTshirtMobile,
        imgSrcDesktop: greyTshirtMobile,
        title: "Grey Trench Coat",
        description: "A stylish grey trench coat for a sophisticated look.",
        price: "$220.00"
      },
      {
        id: "jacket6",
        imgSrcMobile: lightblueTshirtMobile,
        imgSrcTablet: lightblueTshirtMobile,
        imgSrcDesktop: lightblueTshirtMobile,
        title: "Light Blue Windbreaker",
        description: "A lightweight windbreaker for breezy days.",
        price: "$95.00"
      },
      {
        id: "jacket7",
        imgSrcMobile: mountainTshirtMobile,
        imgSrcTablet: mountainTshirtMobile,
        imgSrcDesktop: mountainTshirtMobile,
        title: "Mountain Fleece Jacket",
        description: "A cozy fleece jacket for outdoor activities.",
        price: "$125.00"
      },
      {
        id: "jacket8",
        imgSrcMobile: pinkTshirtMobile,
        imgSrcTablet: pinkTshirtMobile,
        imgSrcDesktop: pinkTshirtMobile,
        title: "Pink Varsity Jacket",
        description: "A stylish varsity jacket with a touch of pink.",
        price: "$150.00"
      },
      {
        id: "jacket9",
        imgSrcMobile: primetimeTshirtMobile,
        imgSrcTablet: primetimeTshirtMobile,
        imgSrcDesktop: primetimeTshirtMobile,
        title: "Primetime Wool Coat",
        description: "An elegant wool coat for primetime style.",
        price: "$250.00"
      },
      {
        id: "jacket10",
        imgSrcMobile: whiteTshirtMobile,
        imgSrcTablet: whiteTshirtMobile,
        imgSrcDesktop: whiteTshirtMobile,
        title: "White Peacoat",
        description: "A stylish peacoat for formal or casual wear.",
        price: "$240.00"
      },
      {
        id: "jacket11",
        imgSrcMobile: yourDesignTshirtMobile,
        imgSrcTablet: yourDesignTshirtMobile,
        imgSrcDesktop: yourDesignTshirtMobile,
        title: "Customizable Jacket",
        description: "Design your own jacket to fit your unique style.",
        price: "$275.00"
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

  
  //MOCK API PARA LOGIN DE USUARIO

  const mockUsers = [
    {
      username: 'jonatas-lira@example.com',
      password: '123',
      fullName: 'Jonatas Lira',
      profilePic: JonatasFoto,
    },
  ];
  
  export const authenticateUser = async (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = mockUsers.find(
          (user) => user.username === email && user.password === password
        );
        if (user) {
          resolve({ username: user.username, fullName: user.fullName, profilePic: user.profilePic });
        } else {
          reject('Invalid email or password');
        }
      }, 1000);
    });
  };

//INFORMACOES DOS FUNCIONARIOS

  const mockManager = {
    username: 'jonatas.manager@example.com',
    password: 'admin123',
    fullName: 'Jonatas Lira',
    role: 'Manager', 
    profilePic: JonatasFoto,  
  };

  export const authenticateManager = async (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === mockManager.username && password === mockManager.password) {
          resolve({
            username: mockManager.username,
            fullName: mockManager.fullName,
            role: mockManager.role,
            profilePic: mockManager.profilePic, 
          });
        } else {
          reject('Invalid manager credentials');
        }
      }, 1000);
    });
  };