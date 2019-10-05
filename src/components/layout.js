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
      <div style={{
        position: `absolute`,
        width: `100%`,
        height: `16.5rem`,
        backgroundColor: `#3F4967`,
        /* The points are: centered top, left bottom, right bottom */
        clipPath: `polygon(0 -1%, 100% -1%, 100% 21%, 98.6% 21%, 97% 16%, 95.4% 19.5%, 93.4% 12%, 91% 20%, 90% 14%, 89.4% 14.4%, 88.8% 14%, 87.8% 21%, 87% 16%, 86.2% 21%, 12% 22%, 0 100%)`,
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
            offset={0}
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
          <div style={{display: `flex`, justifyContent: `center`, alignItems: `baseline`, backgroundColor: `#3F4967`, width:`80px`, height:`34px`, borderRadius: `160px 160px 0 0`}}>
            <div style={{ 
              marginTop:'.7rem',
              border: `solid white`,
              borderWidth: `0 5px 5px 0`,
              display: `inline-block`,
              padding: `9px`,
              borderRadius: `7px`,
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
        backgroundColor: `#3F4967` }}>
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
