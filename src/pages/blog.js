import React from "react"
import Layout from "../components/myLayout"
import PostList from "../components/PostList"
import { graphql, useStaticQuery } from "gatsby"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import { Link } from "gatsby"
import SEO from "../components/SEO"


const getPosts = graphql`
query{
    posts: allContentfulPost(sort:{fields:date,order:DESC}){
      edges{
        node{
          date(formatString:"D MMMM Y")
          title
          author
          excerpt{
            childMarkdownRemark {
              html
            }
          }
          slug
          id:contentful_id
          images{
            fluid{
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const blog = () => {
  
    const { posts } = useStaticQuery(getPosts)

    return (
      <Layout>
      <SEO title="Blog"/>
      <SimpleHero>
        <Banner className="homeHero" info="You can see my best projects here">
          <Link to="/portfolio" className="btn-white">
            explore portfolio
          </Link>
        </Banner>
      </SimpleHero>
      <PostList posts={posts.edges} />
    </Layout>
    )
  
}

export default blog
