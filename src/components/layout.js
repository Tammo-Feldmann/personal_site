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
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
      <RsLink
        activeClass="active"
        to="header-section"
        spy={true}
        smooth={true}
        offset={0}
        duration= {900}
        >
        <div style={{display: `flex`, justifyContent: `center`}}>
          <div style={{
            height: `2rem`,
            width: `4rem`,
            borderRadius: `120px 120px 0px 0px`,
            backgroundColor: `#2F3854`}}></div>
          </div>
      </RsLink>
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
