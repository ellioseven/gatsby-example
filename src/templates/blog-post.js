import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "@components/Layout"
import SEO from "@components/SEO"
import { Post } from "@components/Post"

const Style = styled.article`
  
  .post__content > p {
    text-indent: 2rem;
  }
  
`

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { title, description, date, author } = post.frontmatter

  return (
    <Layout location={ location } title={ siteTitle }>
      <SEO title={ title } description={ description } />
      <Style className="post">
        <Post
          title={ title }
          date={ date }
          author={ author }
          description={ description } />
        <hr />
        <div
          className="post__content layout-indent"
          dangerouslySetInnerHTML={{ __html: post.html }} />
      </Style>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
