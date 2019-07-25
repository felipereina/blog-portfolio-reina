import React from "react"
import styles from "../css/postcard.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby"

const PostCard = ({ post }) => {
  console.log(">>> POSTCARD POST:")
  console.log(post)

  const { title, date, author, slug } = post
  const image = post.image.childImageSharp.fluid

  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <Image fluid={image} />
      </div>
      <div className={styles.info}>
        <div>
          <h2>{title}</h2>
          <h6>
            <span>by {author}</span> /<span>{date}</span>
          </h6>
          <p>{post.excerpt}</p>
          <Link to={slug} className={styles.link}>
            read more
          </Link>
        </div>
      </div>
    </article>
  )
}

export default PostCard
