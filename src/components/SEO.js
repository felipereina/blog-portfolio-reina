import React from 'react'
import {Helmet} from 'react-helmet'
import {useStaticQuery, graphql} from 'gatsby'

const getData = graphql`
query{
    site{
      siteMetadata{
        siteTitle:title
        siteDesc:description
        author
        siteUrl
        image
        twitterUsername
      }
    }
  }
`

const SEO = ({title, description}) => {

    const {site} = useStaticQuery(getData)

    const {author, siteUrl, siteDesc, siteTitle, image, twitterUsername} = site.siteMetadata

    return (
        <Helmet title={`${title} | ${siteTitle}`}>
            <meta name="description" content={description || siteDesc}/>
            <meta name="image" content={image}/>
            {/* twitter card */}
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:creator" content={twitterUsername}/>
            <meta name="twitter:title" content={siteTitle}/>
            <meta name="twitter:description" content={siteDesc}/>
            <meta name="twitter:image" content={`${siteUrl}${image}`}/>
        </Helmet>
    )
}

export default SEO