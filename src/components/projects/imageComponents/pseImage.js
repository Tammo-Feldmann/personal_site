import React from "react";
import { StaticQuery } from "gatsby";
import BackgroundImage from 'gatsby-image'

const ProjectImage = ({ className }) => (
    <StaticQuery
        query={graphql`
        query {
          desktop: file(relativePath: { eq: "pse-logo.png" }) {
            childImageSharp {
              fluid {
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
                    style={{ height: "7rem" }}
                >
                </BackgroundImage>
            )
        }}
    />
)

export default ProjectImage