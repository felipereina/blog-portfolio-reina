import React, { Component } from "react"
import Layout from "../components/myLayout"
import Contact from "../components/Contact/Contact"
import SEO from "../components/SEO"

export default class contact extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Contact"/>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "10rem",
          }}
        >
          <Contact/>
        </div>
      </Layout>
    )
  }
}