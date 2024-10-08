import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
  }

  .text-small {
    font-size: 13px;
  }

  .divs-facilities {
    width: 325px;
  }

  .color-black {
    background-color: #000000;
  }

  .text-color-black {
    color: #000000;
  }

  .color-purple {
    background-color: #9353FF;
  }

  .text-color-purple {
    color: #9353FF;
  }

  .color-veryLightGreen {
    background-color: #DAFF01;
  }

  .text-color-veryLightGreen {
    color: #DAFF01;
  }

  .color-lightGrey {
    background-color: #cccccc;
  }

  .text-color-lightGrey {
    color: grey;
  }

  .white-circle-icon {
    width: 40px;
    height: 40px;
    background-color: white;
  }

  .my-ruler {
    width: 100%; 
    text-align: center; 
    border-bottom: 1px solid grey; 
    line-height: 0.1em;
    margin: 10px 0 20px; 
  }
   
  .my-ruler span { 
    background:#fff; 
    padding:0 10px; 
  }

  .custom-border {
    border-bottom: 1px solid black;
  }

  a {
    cursor: pointer;
  }
`;

export default GlobalStyle;
