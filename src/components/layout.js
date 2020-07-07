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
  max-width: ${rem(900, 18)};;
  
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
      height: 27px;
      margin: 0;
      width: 119px;
      ${hideText()}
    }
    
    menu {
      margin: 0 0 0 auto;
    }
    
    menu a {
      margin-left: ${rem(30, 18)};;
      
      &:first-child {
        margin-left: 0;
      }
    }
  }
  
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header
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
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
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
