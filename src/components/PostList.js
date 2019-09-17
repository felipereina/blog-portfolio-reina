import React from "react"
import PostCard from "./PostCard"
import styles from "../css/postlist.module.css"

const PostList = ({ posts }) => {
  const test = "test"
  return (
    <section className={styles.posts}>
      <div className={styles.center}>
        {posts.map(({ node }, index) => {
          console.log(node)
          return <PostCard key={node.id} post={node} excerpt={node.excerpt.childMarkdownRemark.html} />
        })}
      </div>
    </section>
  )
}

export default PostList
