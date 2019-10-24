import React from "react"
import Image from "gatsby-image"
import styles from "../../css/project.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Project = ({ project }) => {
  const { title, days, slug, images, githubProject } = project

  let mainImage = images[0].fluid

  return (
    <article className={styles.project}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} style={{height: "200px"}} alt="project" />
        {/* <AniLink fade className={styles.link} to={`/projects/${slug}`}>
          details
        </AniLink> 
        */}
        <a className={styles.link} href={githubProject} target="_blank">
          details
        </a>
      </div>
      <div className={styles.footer}>
        <h3>{title}</h3>
        <div className={styles.info}>
        </div>
      </div>
    </article>
  )
}

export default Project
