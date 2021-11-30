import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        /* overscroll-behavior: none; */
    }

    html, body, #___gatsby, #gatsby-focus-wrapper{
        overscroll-behavior: none;
        height: 100vh;
    }

    .pin-spacer {
        /* width: 500% !important; */
    }
`;

export default GlobalStyle;
