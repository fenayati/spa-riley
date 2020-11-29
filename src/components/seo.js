import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

// import defaultMetaImage from '../../static/favicon_multi.png'
const defaultMetaImage = "/static/favicon_multi.png"

function SEO({ description, lang, meta, title, image, path }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteURL
          }
        }
      }
    `
  )

  console.log({defaultMetaImage})

  const metaDescription = description || site.siteMetadata.description
  const siteURL = site.siteMetadata.siteURL
  const imageURL = siteURL + ( image || defaultMetaImage ) 
  const titleSiteConcat = `${title !== undefined ? title + ' | ' : '' }${site.siteMetadata.title}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: titleSiteConcat,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: 'og:image',
          content: imageURL
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: titleSiteConcat,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: 'twitter:site',
          content: '@nsmedira'
        },
        {
          name: 'viweport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          charset: 'utf-8'
        },
        {
          name: 'theme-color',
          content: '#2d728f' 
        },
        {
          name: 'google',
          content: 'nositelinksearchbox'
        },
        {
          name: 'twitter:image',
          content: imageURL
        }
      ].concat(meta)}
    >
      <link rel="canonical" href={siteURL + path} />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO