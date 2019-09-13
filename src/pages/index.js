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
    <div style={{
      marginTop: `4rem`,
      marginBottom: `4rem`
      }}> 
    <Skills></Skills>
    </div>
    <Projects></Projects>
    <h3>Education</h3>
      <p> - Stanford University, PhD in German Studies, 2018</p>
      <p> - Harvard University, Visiting Exchange Scholar, 2016</p>
      <p> - Carl von Ossietzky Universität, MA in Exercise Physiology, 2007</p>
  </Layout>
)

export default IndexPage
