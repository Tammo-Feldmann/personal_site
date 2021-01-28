import React from "react"
import Layout from "../components/layout"
import Skills from "../components/skills/skills-section"
import About from "../components/about"
import Projects from "../components/projects/projects"

const IndexPage = () => (
  <Layout>
    <About></About>
    <Skills></Skills>
    <Projects></Projects>
  </Layout>
)

export default IndexPage
