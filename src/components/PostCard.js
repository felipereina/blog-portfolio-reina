import React from "react"
import styles from "../css/postcard.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby"

const PostCard = ({ post, excerpt }) => {
  const { title, date, images, author, slug } = post
  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <Image fluid={images[0].fluid} />
      </div>
      <div className={styles.info}>
        <div>
          <h2>{title}</h2>
          <h6>
            by <span>{author}</span>/<span>{date}</span>
          </h6>
{/*           <p>{excerpt}</p>
 */}          <Link to={`/blog/${slug}`} className={styles.link}>
            read more
          </Link>
        </div>
      </div>
    </article>
  )
}

export default PostCard
