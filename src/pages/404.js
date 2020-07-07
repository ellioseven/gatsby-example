import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "@components/Layout"
import SEO from "@components/SEO"
import { Title } from "@components/Title"
import { Lede } from "@components/Lede"

const Style = styled.div`
  text-align: center;
`

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <Style>
        <Title>
          <h1>Not Found.</h1>
        </Title>
        <Lede>
          <p>Spewin'</p>
        </Lede>
      </Style>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
