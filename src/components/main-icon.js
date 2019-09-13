import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MainIcon = () => {
  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "MeIcon.png" }) {
      childImageSharp {
        fixed(width: 45) {
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
      display:'inline-flex',
      margin: `0 auto`
    }}
    />
  </div>
}

export default MainIcon