import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  body{
    background: ${(props) => props.theme.bg.primary};
  }
  h1, h2, h3{
    color: ${(props) => props.theme.text.primary};
  }
  p{
    color: ${(props) => props.theme.text.secondary};
  }
  strong{
    color: ${(props) => props.theme.bg.highlight};
  }

`
