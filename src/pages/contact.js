import React, { Component } from "react"
import Layout from "../components/myLayout"
import Contact from "../components/Contact/Contact"

export default class contact extends Component {
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
          <Contact/>
        </div>
      </Layout>
    )
  }
}