import PropTypes from "prop-types";
import React from "react";
import MainIcon from "./main-icon";

import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
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
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#ffffff`}
        >
          <header id="header-section">
            <div style={{
              display: `flex`,
              alignItems: `flex-start`,
              justifyContent: `space-between`,
              padding: `1.4rem 0rem 0rem 0rem`,
              marginLeft: `4rem`,
              marginRight: `2rem`
            }}
            >
              <MainIcon></MainIcon>
            </div>
          </header>
        </BackgroundImage>
      )
    }}
  />
)

RawHeader.propTypes = {
  siteTitle: PropTypes.string,
}

RawHeader.defaultProps = {
  siteTitle: ``,
}

const Header = styled(RawHeader)`
width: 100%;
min-height: 26vh;
opacity: 0.7;
`

export default Header
