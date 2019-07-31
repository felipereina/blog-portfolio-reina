import React from "react"
import PostCard from "./PostCard"
import styles from "../css/postlist.module.css"

const PostList = ({ posts }) => {
  return (
    <section className={styles.posts}>
      <div className={styles.center}>
        {posts.map(({ frontmatter, excerpt }, index) => {
          return <PostCard key={index} post={frontmatter} excerpt={excerpt} />
        })}
      </div>
    </section>
  )
}

export default PostList
