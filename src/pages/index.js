import React from "react"
// eslint-disable-next-line
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Skills from "../components/skills"
import Projects from "../components/projects"
import About from "../components/about"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About></About>
    <Skills></Skills>
    <Projects></Projects>
  </Layout>
)

export default IndexPage
