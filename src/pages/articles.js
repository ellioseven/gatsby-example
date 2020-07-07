import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { rem } from "polished"

import Layout from "@components/Layout"
import SEO from "@components/SEO"
import { Post } from "@components/Post"
import { PostTeaser } from "@components/PostTeaser"

const Style = styled.div`
  
  .post-teaser {
    margin-bottom: ${({ theme }) => theme.rhythm(1)};
    margin-top: ${({ theme }) => theme.rhythm(1)};
    @media (min-width: 768px) {
      padding-left: ${rem(60, 18)};
      padding-right: ${rem(60, 18)};
    }
  }
   
`

const Articles = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const [post, ...posts] = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Style>
        <Post
          title={ post.node.frontmatter.title }
          description={ post.node.frontmatter.description }
          date={ post.node.frontmatter.date }
          author={ post.node.frontmatter.author }
          link={{ to: post.node.fields.slug }} />
        <hr />
        { posts.map(({ node }) => (
          <PostTeaser
            key={ node.fields.slug }
            date={ node.frontmatter.date }
            title={ node.frontmatter.title }
            link={{ to: node.fields.slug }}
            content={ node.frontmatter.description || node.excerpt } />
        )) }
      </Style>
    </Layout>
  )
}

export default Articles

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            author
          }
        }
      }
    }
  }
`
