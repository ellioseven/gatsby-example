import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { ThemeProvider } from "styled-components"
import { theme } from "@config/theme"
import { Global } from "@components/Global"
import { hideText, rem } from "polished"
import styled from "styled-components"

const Style = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rem(840, 18)};
  
  .region--header {
    align-items: center;
    border-bottom: 4px solid ${({ theme }) => theme.color.greyCloud};
    display: flex;
    margin-bottom: ${({ theme }) => theme.rhythm()};
    margin-top: ${({ theme }) => theme.rhythm()};
    max-width: ${rem(620, 18)};
    padding: ${rem(30, 18)};
    
    &:last-child {
      margin-bottom: 0;
    }
    
    &:first-child {
      margin-top: 0;
    }
  
    a {
      color: inherit;
      text-decoration: none;
    }
    
    a:hover,
    a:focus {
      text-decoration: underline;
    }
    
    h1 {
      margin: 0;
    }
    
    h1 a {
      display: block;
      background-image: url("/logo.svg");
      background-size: cover;
      height: 20px;
      margin: 0;
      width: 87px;
      ${hideText()}
      @media (min-width: 768px) {
        height: 27px;
        width: 119px;
      }
    }
    
    menu {
      margin: 0 0 0 auto;
    }
  }
  
  .region menu {
    
    a {
      color: inherit;
      text-decoration: none;
      margin-left: ${rem(30, 18)};;
      
      &:first-child {
        margin-left: 0;
      }
    }
    
    a:hover,
    a:focus {
      color: ${({ theme }) => theme.color.redPunk};
      text-decoration: underline;
    }
      
  }
  
  .region--main,
  .region--footer {
    padding-left: ${rem(30, 18)};
    padding-right: ${rem(30, 18)};
  }
  
  .region--footer {
    padding-bottom: ${rem(60, 18)};
    text-align: right;
  }
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={ theme }>
      <Global />
      <Style>
        <header className="region region--header">
          <h1>
            <Link to="/">ellioseven</Link>
          </h1>
          <menu>
            <Link to="/">About</Link>
            <Link to="/articles">Articles</Link>
          </menu>
        </header>
        <main className="region region--main">{children}</main>
        <hr />
        <footer className="region region--footer">
          <menu>
            <Link to="/">About</Link>
            <Link to="/articles">Articles</Link>
          </menu>
        </footer>
      </Style>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Libre+Franklin:wght@400;700&family=Roboto+Mono&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Helmet>
    </ThemeProvider>
  )
}

export default Layout
