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