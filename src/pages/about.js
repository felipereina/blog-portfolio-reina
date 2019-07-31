import React, { Component } from "react"
import Layout from "../components/layout"

export default class about extends Component {
  render() {
    return (
      <Layout>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "10rem",
          }}
        >
          <h1>Sorry, I am still doing some work on the site</h1>
        </div>
      </Layout>
    )
  }
}
