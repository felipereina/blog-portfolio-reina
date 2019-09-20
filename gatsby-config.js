require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "O_Reina Blog",
    description:
      "O_Reina, Felipe Reina personal blog and portfolio. Portuguese and European Startup Scene, React, React Native",
    author: "O_Reina, Felipe Reina",
    twitterUsername: "@O_Reina",
    image:"/rio.jpg",
    siteUrl:"https://felipereina.netlify.com"
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "ba9ppd3cnour",
        accessToken: "URMVHdm-CqJ7Ua00dUOIRx-BN59GWIKijISVQO1QbaQ",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-playground`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: "https://felipereina.netlify.com",
        sitemap: "https://felipereina.netlify.com/sitemap.xml",
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
  ],
}
