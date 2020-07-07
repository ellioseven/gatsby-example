import React from "react"
import { graphql } from "gatsby"

import Layout from "@components/Layout"
import SEO from "@components/SEO"
import { Lede } from "@components/Lede"
import { Title } from "@components/Title"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Building Web Solutions Since 2006" />
      <Title>
        <h1>Building Web Solutions Since 2006</h1>
      </Title>
      <Lede>
        <p>I’m a full stack engineer & architect based in Sydney, Australia. I’ve been working with web technology since MSN messenger was a thing. Yep, that’s a long time. I work with startups to overcome technical challenges with efficiently and reliably.</p>
      </Lede>
      <hr/>
      <section className="layout-indent">
        <h2 className="h3">Proficient Technologies</h2>
        <ul>
          <li><strong>Languages:</strong> ES6, Node.js, PHP</li>
          <li><strong>Frontend:</strong> React, Next.js, Webpack, Babel, ESLint</li>
          <li><strong>Backend:</strong> Express.js, Drupal</li>
          <li><strong>Data:</strong> Apollo, GraphQL, MongoDB, MySQL</li>
          <li><strong>Testing & QA:</strong> Storybook, Jest, Cypress, Google Lighthouse</li>
          <li><strong>Operations:</strong> Git, Linux, Ansible, Docker, Platform.sh</li>
          <li><strong>Design:</strong> Figma</li>
          <li><strong>Management & Comms:</strong> Jira, Confluence, Slack</li>
        </ul>
      </section>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
