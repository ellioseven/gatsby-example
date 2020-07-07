import React from "react"
import styled from "styled-components"

const Style = styled.div`
  @media (min-width: 768px) {
    margin-bottom: ${({ theme }) => theme.rhythm(1)};
    margin-top: ${({ theme }) => theme.rhythm(2)};
  }
`

export const Title = ({ children }) => (
  <Style className="title">
    { children }
  </Style>
)
