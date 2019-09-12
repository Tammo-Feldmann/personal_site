import React from "react"
// eslint-disable-next-line
//import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ display: `flex` }}>
      <div> 
      <h1 style={{
        color: `#2F3854`

      }}
      >About Me</h1>
      <div style={{ 
        maxWidth: `300px`, 
        marginBottom: `1.45rem`, 
        marginTop: `2rem`, 
        color: `#575964`
       }}>
        <p>
          I am stoked about learning everything related to coding.
        </p>
        </div>
      </div>
      <div style={{ marginLeft: `335px`}}>
        <Image />
        <p>Hi, I am @Tammo-Feldmann</p>
      </div>
    </div>
    <hr style={{
      borderColor: '#d'
    }}></hr>

    <p>- - - -Skills Construction hours per month -- working on my development stack</p>
    <h3>Education</h3>
      <p> - Stanford University, PhD in German Studies, 2018</p>
      <p> - Harvard University, Visiting Exchange Scholar, 2016</p>
      <p> - Carl von Ossietzky Universität, MA in Exercise Physiology, 2007</p>
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
