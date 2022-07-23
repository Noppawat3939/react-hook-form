import { createGlobalStyle } from "styled-components";
import { STYLES } from "../../constants";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;    
    }

    html {
        height: 100%;
        scroll-behavior: smooth;
    }

    body {
        font-family: Verdana, Tahoma, sans-serif;
        background: ${STYLES.BLACK};
        color: ${STYLES.WHITE};
        max-width: 1200px;
        width: 100%;
        min-height: 100vh;
        margin: 0 auto;
    }

`;

export default GlobalStyle;
