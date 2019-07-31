import React, { Component } from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Projects from "../components/Projects/Projects"
import { graphql } from "gatsby"
export default class portfolio extends Component {
  render() {
    return (
      <Layout>
        {/* <StyledHero img={this.props.data.rio.childImageSharp.fluid} />
        <Projects /> */}
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

export const query = graphql`
  query {
    rio: file(relativePath: { eq: "rio.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
