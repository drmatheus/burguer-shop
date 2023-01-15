import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }

  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");

  :root{

    --color-primary: #27AE60;
    --color-secundary: #EB5757;

    --color-white: #FFFFFF;   

    --color-gray-00: #F5F5F5;
    --color-gray-100: #E0E0E0;
    --color-gray-200: #999999;
    --color-gray-300: #828282; 
    
    --color-gray-600: #333333;
    
    --radius-1: 8px;
    }

    button{
      cursor: pointer;
      
    }
   
`;
