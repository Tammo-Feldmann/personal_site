/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import HoverText from "../components/hover-text";
import { Link as RsLink} from "react-scroll";
import LinkedIn from "../images/LinkedIn.svg";
import GitHub from "../images/GitHub.svg";
import Clipboard from "../components/clipboard";


import ReactTooltip from "react-tooltip";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} >
      </Header>
      <div style={{
        position: `absolute`,
        width: `79.8rem`,
        height: `16.5rem`,
        backgroundColor: `#AFB4C4`,
        /* The points are: centered top, left bottom, right bottom */
        clipPath: `polygon(0 -1%, 100% -1%, 100% 23.5%, 64% 24%, 62% 8%, 60% 24%, 10% 26%, 0 100%)`,
        }}>
        <div style={{ 
          display: `flex`, 
          justifyContent: `center`,
          marginLeft: `4rem`
          }}>
          <div style={{
            display: `flex`,
            /* The values represent: top, right, bottom, left */
            padding: `1rem 8rem 0rem 0rem`, 
            justifyContent: `space-between`,
            width: `50rem`}}>
          <RsLink
            activeClass="active"
            to="about-section"
            spy={true}
            smooth={true}
            offset={-142}
            duration= {500}
            ><HoverText>about</HoverText>
          </RsLink>
          <RsLink
            activeClass="active"
            to="expertise-section"
            spy={true}
            smooth={true}
            offset={60}
            duration= {700}
            ><HoverText>expertise</HoverText>
          </RsLink>
          <RsLink
            activeClass="active"
            to="projects-section"
            spy={true}
            smooth={true}
            offset={-20}
            duration= {1100}
            ><HoverText>projects</HoverText>
          </RsLink>
          <div style={{
                  display:`flex`,
                  justifyContent: `space-between`,
                  alignItems: `baseline`,
                  minWidth: `4.8rem`,
                  marginLeft: `1rem`
                  }}>
              <div data-tip="Copy my email to your clipboard" style={{cursor: 'pointer', borderRadius: `20px`, backgroundColor: `#2F3854`}}>
                <div  style={{ width:`24px`}}>
                  <Clipboard></Clipboard>
                </div>
              </div>
              <div data-tip="Copy my email to your clipboard" style={{cursor: 'pointer', padding: `10px`, borderRadius: `10px`}}>
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
      </div>
      </div>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          zIndex: `-1`
        }}
      >
        <main>{children}</main>
      </div>
      <div style={{textAlign: `center`, marginBottom: `0`, cursor:`pointer`}}>
      <RsLink
        activeClass="active"
        to="header-section"
        spy={true}
        smooth={true}
        offset={0}
        duration= {900}
        >
        <div style={{display: `flex`, justifyContent: `center`}}>
          <div style={{display: `flex`, justifyContent: `center`, alignItems: `baseline`, backgroundColor: `#2F3854`, width:`100px`, height:`40px`, borderRadius: `110px 110px 0 0`}}>
            <div style={{ 
              marginTop:'1rem',
              border: `solid white`,
              borderWidth: `0 5px 5px 0`,
              display: `inline-block`,
              padding: `9px`,
              borderRadius: `4px`,
              transform: `rotate(-135deg)`
              }}> 
              </div>
          </div>
        </div>
      </RsLink>
      </div>
      <footer style={{ 
        margin:'0px',
        color: `white`,
        backgroundColor: `#2F3854` }}>
        © {new Date().getFullYear()}, Tammo Feldmann
        {` `}
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
