import React from "react"
// eslint-disable-next-line
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import SEO from "../components/seo"
import Skills from "../components/skills/skills-section"
import About from "../components/about"
import Experience from "../components/experience/experience-section"
//import "bootstrap/dist/css/bootstrap.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <About></About>
    <Skills></Skills>
    <Experience></Experience>
  </Layout>
)

export default IndexPage
