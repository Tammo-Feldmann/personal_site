import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Graph = () => {
  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "skills-graph.png" }) {
      childImageSharp {
        fixed(width: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`)

  return <div style={{
    display: `flex`,
    justifyContent: `center`,
    alignItems: `baseline`,
    backgroundColor: `#ECECEC`
    }}>
    <Img 
    fixed={data.placeholderImage.childImageSharp.fixed}
    style={{
      margin: `.4rem`
      }}
    />
  </div>
}

export default Graph