/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header"
import Poly1 from "./poly1"
import "./layout.css"
import Bottom from "./bottom-bar"

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
      <Poly1></Poly1>
      <div
        style={{
          margin: `0 auto`,
          paddingTop: 0,
          zIndex: `-1`
        }}
      >
        <main>{children}</main>
      </div>
      <Bottom></Bottom>
      <footer style={{
        margin: '0px',
        color: `white`,
        backgroundColor: `#3F4967`
      }}>
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
