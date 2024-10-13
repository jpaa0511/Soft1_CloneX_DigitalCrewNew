import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    background-color: #000000; 
  }

  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    margin: -8px;

    color-scheme: light dark;
    color: #ffffff; 
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    --twittercolor: #1DA1F2;
    --Hover: rgba(29, 161, 242, 0.1); 
  }

  .App {
    display: flex;
    height: 100vh;
    max-width: 1250px;
    margin: 0 auto;
    border: none; 
  }
`;
