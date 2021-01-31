import React from "react";
import { graphql, StaticQuery } from "gatsby";
import BackgroundImage from 'gatsby-background-image'

const RawHeader = ({ className }) => (
    <StaticQuery
        query={graphql`
      query {
        desktop: file(relativePath: { eq: "Adirondacs.JPG" }) {
          childImageSharp {
            fluid(duotone: { highlight: "#FFFFFF", shadow: "#CCD5F1", opacity: 15 }, quality: 100, maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
        render={data => {
            const imageData = data.desktop.childImageSharp.fluid
            return (
                <BackgroundImage
                    Tag="section"
                    className={className}
                    fluid={imageData}
                    backgroundColor={`#ffffff`}
                    style={{ height: "6rem" }}
                >

                </BackgroundImage>
            )
        }}
    />
)

export default RawHeader
