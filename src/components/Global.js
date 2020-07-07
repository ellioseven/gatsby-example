import { createGlobalStyle } from "styled-components"
import { em, normalize } from "polished"

export const Global = createGlobalStyle`
  ${normalize()}

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body {
    color: ${({ theme }) => theme.color.greySlate};
    font-family: "Libre Baskerville", serif;
  }
  
  html {
    font-size: 100%;
    line-height: 237.5%;
    @media (min-width: ${em(768, 16)}) {
      font-size: 112.5%;
      line-height: 233.3%;
    }
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  dl,
  blockquote,
  pre,
  p {
    margin-bottom: ${({ theme }) => theme.rhythm()};
    margin-top: ${({ theme }) => theme.rhythm()};
    
    &:first-child {
      margin-top: 0;
    }
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  pre,
  code {
    font-family: "Roboto Mono", monospace, monospace;
  }
  
  pre {
    background-color: ${({ theme }) => theme.color.greySlate};
    box-shadow: 100px 0 0 0 #141313, -100px 0 0 0 #141314;
    color: white;
    padding-bottom: 56px;
    padding-top: 56px;
    overflow-x: auto;
  }
  
  hr {
    height: 8px;
    width: 8px;
    background: #111;
    border: 0;
    margin-bottom: ${({ theme }) => theme.rhythm(1.5)};
    margin-top: ${({ theme }) => theme.rhythm(1.5)};
    border-radius: 100%;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Libre Franklin", sans-serif;
    font-weight: 700;
    margin-bottom: ${({ theme }) => theme.rhythm(0.5)};
    margin-top: ${({ theme }) => theme.rhythm(1.25)};
    
    &:first-child {
      margin-top: 0;
    }
    
    + * {
      margin-top: 0;
    }
  }
  
  a {
    color: ${({ theme }) => theme.color.blueVolt};
    
    &:hover,
    &:focus {
      color: ${({ theme }) => theme.color.greySlate};
    }
  }
  
  h1 {
    ${({ theme }) => theme.typeSets.heading["4"]}
    @media (min-width: ${em(768, 16)}) {
      ${({ theme }) => theme.typeSets.heading["5"]}
    }
  }
  
  h2 {
    ${({ theme }) => theme.typeSets.heading["2"]}
  }
  
  h3 {
    ${({ theme }) => theme.typeSets.heading["1"]}
  }
  
  h4 {
    ${({ theme }) => theme.typeSets.heading["0"]}
  }
  
  h4, h5, h6  {
    ${({ theme }) => theme.typeSets.heading["-1"]}
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  dl,
  table,
  form,
  hr,
  p {
    &:first-child {
      margin-top: 0;
    }
    
    &:last-child {
      margin-bottom: 0;
    }
  } 
  
  blockquote {
    font-style: italic;
    margin-left: 0;
    margin-right: 0;
    ${({ theme }) => theme.typeSets.content["1"]}
    
    p {
      margin: 0;
    }
  }
  
  cite {
    ${({ theme }) => theme.typeSets.heading["0"]}
    font-family: "Libre Franklin", sans-serif;
    font-style: normal;
    font-weight: 700;
  }
  
  ul,
  ol {
  
    p {
      margin-bottom: 0;
      margin-top: 0;
    }
    
    ul,
    ol {
      margin-bottom: 0;
      margin-top: 0;
    }
  }
  
  ol > li {
    list-style: lower-roman;
  }
`
