import React from 'react'
import BlogCard from './BlogCard'
import { useStaticQuery, graphql } from 'gatsby'
import styles from '../../css/blog.module.css'
import { get } from 'https'

const getPosts = graphql`
query{
    posts: allContentfulPost(sort:{fields:date,order:DESC}){
      edges{
        node{
          date(formatString:"D MMMM Y")
          title
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

const BlogList = () => {
    const { posts } = useStaticQuery(getPosts)

    return(
        <section className={styles.blog}>
            <div className={styles.center}>
                {posts.edges.map(({node}) => {
                   return <BlogCard key={node.id} blog={node}/>
                })}
            </div>
        </section>
    )
}

export default BlogList