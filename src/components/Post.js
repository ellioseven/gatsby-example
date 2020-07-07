import React from "react"
import styled from "styled-components"
import { Title } from "@components/Title"
import { Lede } from "@components/Lede"
import { Link } from "gatsby"

const Style = styled.article`

  header {
    @media (min-width: 768px) {
      margin-bottom: ${({ theme }) => theme.rhythm(1)};
    }
  }

  .title {
    margin-bottom: 0;
  }
  
  .post__meta {
    font-family: "Libre Franklin", sans-serif;
    margin-top: ${({ theme }) => theme.rhythm(.5)};
  }
  
  .post__lede {
    margin-top: ${({ theme }) => theme.rhythm(.5)};
  }
  
`

export const Post = ({ title, date, author, description, link }) => (
  <Style>
    <header>
      <Title>
        { link && <h1><Link { ...link }>{ title }</Link></h1> }
        { !link && <h1>{ title }</h1> }
      </Title>
      <div className="post__meta">
        Written <strong>{ date }</strong> by <strong>{ author }</strong>
      </div>
      <div className="post__lede">
        <Lede>{ description }</Lede>
      </div>
    </header>
  </Style>
)
