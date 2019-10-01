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
      <div style={{ display: `flex`, 
          justifyContent: `center`,}}>
        <div style={{ 
          display: `flex`, 
          justifyContent: `space-between`,
          margin: `.5rem`,
          paddingTop: `1.75rem`,
          width: `56rem`
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
        </div>
        <div style={{
          position: `absolute`,
          width: `0`,
          height: `0`,
          borderRight: `6rem solid transparent`,
          borderTop: `18rem solid #9CA7C8`,
          zIndex: `2`
        }}>
          </div>

      <div style={{
        width: `0 auto`,
        height: `5rem`,
        backgroundColor: `#4B5678`,
        /* The points are: centered top, left bottom, right bottom */
        clipPath: `polygon(0 0, 0 100%, 100% 0)`
        }}>
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
          <div style={{display: `flex`, justifyContent: `center`, alignItems: `baseline`, backgroundColor: `#2F3854`, width:`80px`, height:`40px`, borderRadius: `90px 90px 0 0`}}>
            <div style={{marginTop: `14px`, backgroundColor: `white`, width:`20px`, height:`20px`, borderRadius: `90px`}}></div>
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
