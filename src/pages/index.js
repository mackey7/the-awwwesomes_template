import React from "react"
// import { Link } from "gatsby"
import Header from '../components/Header/Header.js'
import Projects from '../components/Projects/Projects.jsx'
import Company from '../components/Company/Company.jsx'
import Ideas from '../components/Ideas/Ideas.jsx'
import '../components/layout.css';

// import SEO from "./components/seo"

const IndexPage = () => (

  <div>
    <Header />
    <Projects />
    <Company />
    <Ideas />
  </div>
)

export default IndexPage
