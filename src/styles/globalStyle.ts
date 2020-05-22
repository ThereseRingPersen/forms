import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
body {
    *{
        box-sizing: border-box;
    }
    display: flex;
    flex-direction: column;
    padding: 50px;
    font-family:Arial, Helvetica, sans-serif;
    font-size:100%;
}

h1 {
    margin: 0.67em 0;
    font-size: 2.5em;
    font-weight: 100;
   
    }
h2 {
    margin: 0.83em 0;
    font-size: 2em;
    font-weight: 100; 
    }
h3{
    margin: 0.83em 0;
    font-size: 1.5em;
    font-weight: 100;
    }
h4 {
    margin: 0.5em 0;
    font-size: 1.25em;
    font-weight: 700;
    }
    
p {
    font-size: 1em;
    }
`;
export default GlobalStyle;
