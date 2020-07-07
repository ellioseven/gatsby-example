import React from "react"
import styled from "styled-components"

const Style = styled.div`
  margin-bottom: ${({ theme }) => theme.rhythm(1)};
  margin-top: ${({ theme }) => theme.rhythm(1)};
  @media (min-width: 768px) {
    ${({ theme }) => theme.typeSets["content"][1]}
  }
  
  &:first-child {
    margin-top: 0;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`

export const Lede = props => (
  <Style className="lede">
    { props.children }
  </Style>
)
