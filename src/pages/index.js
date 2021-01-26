import React from "react"
import Layout from "../components/layout"
import Skills from "../components/skills/skills-section"
import About from "../components/about"
import Experience from "../components/experience/experience-section"

const IndexPage = () => (
  <Layout>
    <About></About>
    <Skills></Skills>
    <Experience></Experience>
  </Layout>
)

export default IndexPage
