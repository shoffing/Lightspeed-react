import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin:0;
        border: 0;
        font-family: sans-serif;
    }

    body {
        background-color: #1f2128;
    }

    .App {
        text-align: center;
    }
`;

export default GlobalStyle;
