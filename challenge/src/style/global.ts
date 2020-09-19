import "react-toastify/dist/ReactToastify.css";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    margin: 10px;
    background: #f8f0f5;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family:'Roboto Slab', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
