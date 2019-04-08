import React from "react"
//import { Link } from "gatsby"
import { FaBeer } from 'react-icons/fa'
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
//import './bootstrap.min.css'

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h3>This is about page</h3>
  </Layout>
)

export default AboutPage
