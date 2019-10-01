import PropTypes from "prop-types";
import React from "react";
import MainIcon from "./main-icon";
import LinkedIn from "../images/LinkedIn.svg";
import GitHub from "../images/GitHub.svg";
import Clipboard from "../components/clipboard";
import HoverText from "../components/hover-text";
import { Link as RsLink} from "react-scroll";
import ReactTooltip from "react-tooltip";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from 'gatsby-background-image'

const RawHeader = ({ className, siteTitle }) => (
      <StaticQuery
        query={graphql`
          query {
            desktop: file(relativePath: { eq: "Adirondacs.JPG" }) {
              childImageSharp {
                fluid(duotone: { highlight: "#FFFFFF", shadow: "#CCD5F1", opacity: 20 }, quality: 100, maxWidth: 960) {
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
            alignItems: `baseline`,
            justifyContent:`space-between`,
            paddingTop: `1rem`,
            paddingBottom: `.5rem`,
            marginLeft: `2rem`,
            marginRight: `2rem`,
            minWidth: `35rem`
            }}
            >
            <MainIcon></MainIcon>
        
            <div style={{
                  display:`flex`,
                  justifyContent: `space-between`,
                  alignItems: `baseline`,
                  minWidth: `6rem`
                  }}>
              <div data-tip="Copy my email to your clipboard" style={{cursor: 'pointer', backgroundColor: `#E6E2E2`, padding: `8px`, borderRadius: `20px`}}>
                <div  style={{ width:`24px`}}>
                  <Clipboard></Clipboard>
                </div>
              </div>
              <div data-tip="Copy my email to your clipboard" style={{cursor: 'pointer', backgroundColor: `#E6E2E2`, padding: `8px`, borderRadius: `10px`}}>
                <a href="https://www.linkedin.com/in/tammo-feldmann/">
                  <img src={LinkedIn} data-tip="LinkedIn" alt="LinkedIn logo" style={{width:`20px`}}/>
                </a>
              </div>
              <a href="https://github.com/Tammo-Feldmann" data-tip="GitHub" style={{width:`21px`}}>
                <img src={GitHub} alt="GitHub logo"/>
              <ReactTooltip type="light"/>
              </a>
            </div>
          </div> 
          <div style={{ display: `flex`, 
                        alignItems: `baseline`,
                        justifyContent: `space-between`,
                        marginLeft: `16rem`,
                        marginRight: `24rem`
                        }}>
            <RsLink
              activeClass="active"
              to="about-section"
              spy={true}
              smooth={true}
              offset={0}
              duration= {500}
              ><HoverText>about</HoverText>
            </RsLink>
            <RsLink
              activeClass="active"
              to="expertise-section"
              spy={true}
              smooth={true}
              offset={0}
              duration= {700}
              ><HoverText>expertise</HoverText>
            </RsLink>
            <RsLink
              activeClass="active"
              to="projects-section"
              spy={true}
              smooth={true}
              offset={0}
              duration= {1100}
              ><HoverText>projects</HoverText>
            </RsLink>
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
min-height: 36vh;
opacity: 0.7;

`

export default Header
