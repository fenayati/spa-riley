import React from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

// COMPONENTS
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { Column, Columns, Container } from "../components/layout/bulma"
import VerticalCenter from '../components/layout/vertical-center'
import Window from '../components/layout/window'

// STYLES
import '../styles/pages/index.css'

const IndexPage = ( {data} ) => (
  <Layout>

    <SEO title="Home" image={data.ogImagePath.childImageSharp.fixed.src} />

    <Window classes={["window-index"]}>
      <VerticalCenter classes={["vertical-center-index"]}>
        <Container>
          <Columns>

            <Column>
              <h1 
                style={{
                  fontSize: "72px", 
                  color: "white"
                }}
              >
                Spa Riley: Putting Self Love First
              </h1>
            </Column>
            
            <Column>
              <Img 
                fluid={data.stones.childImageSharp.fluid} 
                style={{border: "10px solid white"}}
              />
            </Column>
            
          </Columns>
        </Container>
      </VerticalCenter>
    </Window>

  </Layout>
)

export default IndexPage

// 08.29.20 / ADD GRAPH QL QUERY
export const query = graphql`
  query {
    stones: file(relativePath: {eq: "index/stones.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ogImagePath: file(relativePath: {eq: "logo_transparent_multi_v3.png"}) {
      childImageSharp {
        fixed {
          src
        }
      }
    }
  }
`