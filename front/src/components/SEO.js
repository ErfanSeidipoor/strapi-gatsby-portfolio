import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"


export const query = graphql`
  {
    site {
      siteMetadata {
        sitetitle: title
        siteDesc: description
        author
        twitterUsername
        image
        siteUrl
      }
    }
  }
`

const SEO = ({ title, description,}) => {

  const { site } = useStaticQuery(query)
  const {
    sitetitle,
    siteDesc,
    twitterUsername,
    image,
    siteUrl,
  } = site.siteMetadata


  return (
    <Helmet htmlAttributes={{lang:"eng"}} title={`${title} | ${sitetitle}`} >
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
      <meta name="twitter:card" content="summary_larg_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={sitetitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  )
}

export default SEO
