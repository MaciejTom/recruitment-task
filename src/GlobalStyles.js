import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
    --maxWidth: 1280px;

* {
    box-sizing: border-box;
    font-family: "Lato", sans-serif;
}
body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background: linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%);

   
    h1 {
        font-size: 2rem;
        font-weight: 600;
        color: var(--white); 
    }
    h3 {
        font-size: 1.1rem;
        font-weight: 600;
    }
    p {
        font-size: 1rem;
        color: var(--white);
    }   
    }
`;
