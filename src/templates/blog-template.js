import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styles from "../css/postTemplate.module.css"
import Anilink from 'gatsby-plugin-transition-link/AniLink'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Blog = ({data}) => {

    const{title, author, date, body:{json}} = data.post
    console.log(json)

    const options = {
        renderNode: {
            "embedded-asset-block": (node) =>{
                return( 
                <div>
{/*                  <img width="400" src={node.data.target.fields.file['en-US'].url}/>
 */}                </div>
                )}
        }
    }
    return(
        <Layout>
            <section className={styles.template}>
                
                <div className={styles.info}>
          <h1>{title}</h1>
          <h4>
            <span>by {author}</span> / <span>{date}</span>
          </h4>
        </div>
                    <article className={styles.content}>
                        {documentToReactComponents(json, options)}
                    </article>

                    <Anilink fade to='/blog' className="btnPrimary">
                        all posts
                    </Anilink>
                    
            </section>
        </Layout>
    )
}

export default Blog

export const query = graphql`
query getBlog($slug: String!){
    post:contentfulPost( slug: {eq: $slug} ){
    title
    author
    date(formatString:"D MMMM, Y")
    body{
      json
    }
  }
    
  }
`