import React, { Component } from "react"
import Layout from "../components/myLayout"
import SEO from "../components/SEO"

export default class about extends Component {
  render() {
    return (
      <Layout>
        <SEO title="About"/>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "10rem",
          }}
        >
          <h1>I am still doing some work on the site</h1>
        </div>
      </Layout>
    )
  }
}
