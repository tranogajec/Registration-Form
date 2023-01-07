import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fff;
    font-family: "Times New Roman", Times, serif;
    margin: 0;
    padding: 0;
  }
`;

const size = {
  xs: '320px',
  sm: '425px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1536px',
  xxxl: '1920px'
}

export const screenSize = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
  xxl: `(min-width: ${size.xxl})`,
  xxxl: `(min-width: ${size.xxxl})`,
}