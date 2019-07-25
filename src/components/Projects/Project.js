import React from "react"
import Image from "gatsby-image"
import styles from "../../css/project.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Project = ({ project }) => {
  const { name, days, slug, images } = project

  let mainImage = images[0].fluid

  return (
    <article className={styles.project}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="project" />
        <AniLink fade className={styles.link} to={`/projects/${slug}`}>
          details
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <div className={styles.details}>
            <h6>{days} days</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Project
