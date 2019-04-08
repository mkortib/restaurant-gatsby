import React from "react"
//import { Link } from "gatsby"
import { FaBeer } from 'react-icons/fa'
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
//import './bootstrap.min.css'

const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h3>This is contact page</h3>
  </Layout>
)

export default ContactPage
