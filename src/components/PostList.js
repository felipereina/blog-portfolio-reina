import React from "react"
import PostCard from "./PostCard"
import styles from "../css/postlist.module.css"

const PostList = ({ posts }) => {
  console.log(">>> POSTLIST POSTS:")
  console.log(posts)
  return (
    <section className={styles.posts}>
      <div className={styles.center}>
        {posts.map(({ frontmatter }, index) => {
          return <PostCard key={index} post={frontmatter} />
        })}
      </div>
    </section>
  )
}

export default PostList
