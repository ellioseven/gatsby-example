import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { rem } from "polished"

const Style = styled.article`
  @media (min-width: 768px) {
    display: flex;
    width: 100%;
  }
  
  h1 {
    margin-bottom: ${({ theme }) => theme.rhythm(.25)}
  }
  
  .post-teaser__meta {
    @media (min-width: 768px) {
      display: flex;
      margin-top: 2px;
      min-width: ${rem(170, 18)};
      text-align: right;
    }
  }
`

export const PostTeaser = ({ date, title, content, link }) => (
  <Style className="post-teaser">
    <section className="post-teaser__meta">{ date }</section>
    <section className="post-teaser__content">
      <h1 className="h3">
        <Link { ...link }>
          { title }
        </Link>
      </h1>
      <p dangerouslySetInnerHTML={{ __html: content }} />
    </section>
  </Style>
)
