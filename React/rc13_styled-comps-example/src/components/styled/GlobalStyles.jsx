import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
 }

 body{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background: radial-gradient(circle, rgba(173,185,244,1) 0%, rgba(209,178,184,1) 100%);
 }

 p{
    line-height: 1.5;
    opacity: 0.7;
 }

`;
