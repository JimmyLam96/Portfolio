import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        -webkit-box-sizing: border-box !important;
	    -moz-box-sizing: border-box !important;
	    -ms-box-sizing: border-box !important;
	    box-sizing: border-box !important;
    }

    html {
        font-size: 16px;
        font-family: "Quicksand";
    }
    
    body, #___gatsby, #gatsby-focus-wrapper {
        width: 100%;
        min-height: 100vh;
    }

`;

export default GlobalStyle;
