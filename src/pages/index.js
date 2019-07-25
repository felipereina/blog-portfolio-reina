import React from "react"
import Layout from "../components/layout"
import PostList from "../components/PostList"
import { graphql, useStaticQuery } from "gatsby"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import { Link } from "gatsby"

const getPosts = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            author
            slug
            date(formatString: "MMMM Do, YYYY")
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`

export default () => {
  const response = useStaticQuery(getPosts)
  const posts = response.allMdx.edges
  console.log(" >>>> posts:")
  console.log(posts)
  let realPosts = []

  posts.forEach(({ node }) => {
    if (node.frontmatter.title !== "") {
      realPosts.push(node)
    }
  })
  console.log(" >>>> REALPosts:")
  console.log(realPosts)
  return (
    <Layout>
      <SimpleHero>
        <Banner className="homeHero" info="You can see my best projects here">
          <Link to="/portfolio" className="btn-white">
            explore portfolio
          </Link>
        </Banner>
      </SimpleHero>
      <PostList posts={realPosts} />
    </Layout>
  )
}
