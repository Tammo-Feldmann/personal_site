import PropTypes from "prop-types";
import React from "react";
import MainIcon from "./main-icon";
import LinkedIn from "../images/LinkedIn.svg";
import GitHub from "../images/GitHub.svg";
import Clipboard from "../components/clipboard";
import HoverText from "../components/hover-text";
import { Link as RsLink} from "react-scroll";
import ReactTooltip from "react-tooltip";
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const Header = ({ className, siteTitle }) => (
      <StaticQuery
        query={graphql`
          query {
            desktop: file(relativePath: { eq: "Adirondacs.JPG" }) {
              childImageSharp {
                fluid(quality: 90, maxWidth: 920) {
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
              backgroundColor={`#040e18`}
            >
                <header id="header-section"
        style={{
        }}
      >  
          <div style={{
            display: `flex`,
            alignItems: `baseline`,
            justifyContent:`space-between`,
            paddingTop: `1.5rem`,
            paddingBottom: `.5rem`,
            marginLeft: `8rem`,
            marginRight: `6rem`,
            minWidth: `35rem`
            }}
            >
            <MainIcon></MainIcon>
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
            
            <div style={{display:`flex`, justifyContent: `space-between`, alignItems: `baseline`, minWidth: `6rem`}}>
              <div data-tip="Copy my email to your clipboard" style={{cursor: 'pointer', width:`24px`}}>
                <Clipboard></Clipboard>
              </div>
              <a href="https://www.linkedin.com/in/tammo-feldmann/">
                <img src={LinkedIn} data-tip="LinkedIn" alt="LinkedIn logo" style={{width:`20px`}}/>
              </a>
              <a href="https://github.com/Tammo-Feldmann" data-tip="GitHub" style={{width:`21px`}}>
                <img src={GitHub} alt="GitHub logo"/>
              <ReactTooltip type="light"/>
              </a>
            </div>
          </div> 
          </header>
        </BackgroundImage>
      )
    }}
  />
)

// const StyledBackgroundSection = styled(BackgroundSection)`
//   width: 100%;
//   background-position: bottom center;
//   background-repeat: repeat-y;
//   background-size: cover;
// `


// const Header = ({ siteTitle }) => (
//   <header id="header-section"
//     style={{
//     }}
//   >  
//       <div style={{
//         display: `flex`,
//         alignItems: `baseline`,
//         justifyContent:`space-between`,
//         paddingTop: `1.5rem`,
//         paddingBottom: `.5rem`,
//         marginLeft: `8rem`,
//         marginRight: `6rem`,
//         minWidth: `35rem`
//         }}
//         >
//           <StyledBackgroundSection></StyledBackgroundSection>
//         <MainIcon></MainIcon>
//         <RsLink
//           activeClass="active"
//           to="about-section"
//           spy={true}
//           smooth={true}
//           offset={0}
//           duration= {500}
//           ><HoverText>about</HoverText>
//         </RsLink>
//         <RsLink
//           activeClass="active"
//           to="expertise-section"
//           spy={true}
//           smooth={true}
//           offset={0}
//           duration= {700}
//           ><HoverText>expertise</HoverText>
//         </RsLink>
//         <RsLink
//           activeClass="active"
//           to="projects-section"
//           spy={true}
//           smooth={true}
//           offset={0}
//           duration= {1100}
//           ><HoverText>projects</HoverText>
//         </RsLink>
        
//         <div style={{display:`flex`, justifyContent: `space-between`, alignItems: `baseline`, minWidth: `6rem`}}>
//           <div data-tip="Copy my email to your clipboard" style={{cursor: 'pointer', width:`24px`}}>
//             <Clipboard></Clipboard>
//           </div>
//           <a href="https://www.linkedin.com/in/tammo-feldmann/">
//             <img src={LinkedIn} data-tip="LinkedIn" alt="LinkedIn logo" style={{width:`20px`}}/>
//           </a>
//           <a href="https://github.com/Tammo-Feldmann" data-tip="GitHub" style={{width:`21px`}}>
//             <img src={GitHub} alt="GitHub logo"/>
//           <ReactTooltip type="light"/>
//           </a>
//         </div>
//       </div>
      
//   </header>
// )

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
