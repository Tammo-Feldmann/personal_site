/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link as RsLink} from "react-scroll";

import Header from "./header"
import "./layout.css"

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

      <div style={{borderLeft: `200vh solid #525D7D`,
        width: `0`,
        height: `0`,
        borderTop: `0px solid transparent`,
        borderBottom: `100px solid transparent`,
        position: `absolute`,
        zIndex: `-2`}}>
      </div>

      <div style={{borderLeft: `10.5rem solid #2F3854`,
        width: `0`,
        height: `0`,
        borderTop: `0px solid transparent`,
        borderBottom: `20rem solid transparent`,
        position: `absolute`,
        zIndex: `-1`}}>
      </div>

      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1050,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
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
