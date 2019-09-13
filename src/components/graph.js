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

  return <div>
    <Img 
    fixed={data.placeholderImage.childImageSharp.fixed}
    style={{
      margin: `2rem`
      
    }}
    />
  </div>
}

export default Graph