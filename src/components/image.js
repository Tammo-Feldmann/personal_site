import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "work_selfy.JPG" }) {
        childImageSharp {
          fixed(duotone: { highlight: "#FFFFFF", shadow: "#CCD5F1", opacity: 20 }, width: 180, height: 180) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <div style={{border:`2px solid #CFD2D9`,
  display: `flex`,
  justifyContent: `center`,
  borderRadius: `140px`}}>
    <Img 
    fixed={data.placeholderImage.childImageSharp.fixed}
    style={{
      borderRadius:180,
      border: `6px solid #848BA3`,
      margin: `10px`
    }}
    />
  </div>
}

export default Image
