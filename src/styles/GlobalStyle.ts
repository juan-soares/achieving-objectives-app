import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
   }
   
  html, body{
    min-height:100%;
  }
  
  body #root{
    height:100vh;
    }
`;

export default GlobalStyle;
