import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: "Poppins", sans-serif;
    src: url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,300&display=swap");
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
   }
   
  html, body{
    min-height:100%;
     font-family: "Poppins", sans-serif;
    
  }
  
  body #root{
    height:100vh;
    }
`;

export default GlobalStyle;
