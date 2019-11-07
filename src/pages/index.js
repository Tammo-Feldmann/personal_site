import React from "react"
// eslint-disable-next-line
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import SEO from "../components/seo"
import Skills from "../components/skills/skills-section"
import Projects from "../components/projects/projects-section"
import About from "../components/about"
import Experience from "../components/experience/experience-section"
import "bootstrap/dist/css/bootstrap.css"

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <About></About>
    <Skills></Skills>
    <Projects></Projects>
    <Experience></Experience>
  </Layout>
)

export default IndexPage
