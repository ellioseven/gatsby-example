import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import { rem, math } from "polished"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div>
        <header>
          <h1>
            {post.frontmatter.title}
          </h1>
          <div>
            Written <strong>{post.frontmatter.date}</strong> by <strong>Elliot Mitchum</strong>
          </div>
        </header>
        <p>So, what is it like to be color blind and also work in the web design and development industry? I’ll answer that question throughout this article, but it’s something that’s always factored into my thoughts, given my passion for design and now my career. I wonder if having “normal” vision would have made me a better artist growing up. </p>
        <hr />
        <main dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
          }}
        />
        <footer>
          <Bio />
        </footer>
      </div>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
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
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
