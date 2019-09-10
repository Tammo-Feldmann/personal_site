import React from "react"
// eslint-disable-next-line
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>About Me</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
      <p>Hi, I am @Tammo-Feldmann.</p>
      <p>Skills Construction hours per month -- working on my development stack</p>
    </div>
    
    <h3>Education</h3>
      <p>Stanford PhD in German Studies</p>
      <p>Carl von Ossietzky Universität, Oldenburg, Germany, MA, in Exercise Physiology</p>
    <h3>Experience</h3>
      <p>Full-Stack Intern, March 2019 - Present, Datamago</p>
      <p>Learning from friends, Last years of Stanford time</p>
    <h3>Expertise</h3>
      <p>JavaScript, Python, React, Flask</p>
      <p>HTML & CSS</p>
      <p>Machine Learning</p>
      <p>Time Series Forcasting</p>
    <h3>Contact</h3>
      <p>Email: tammo.feldmann@gmail.com</p>
  </Layout>
)

export default IndexPage
