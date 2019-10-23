import React, { Component } from "react"
import Layout from "../components/myLayout"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import Projects from "../components/Projects/Projects"

export default class portfolio extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Portfolio"/>
        {/* <StyledHero img={this.props.data.rio.childImageSharp.fluid} />
        <Projects /> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "10rem",
            marginTop: "0.5rem",
          }}
        >
          <Projects/>
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
