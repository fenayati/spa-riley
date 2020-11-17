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

    <div 
      style={{
        marginTop: "30px",
        height: "100px",
        backgroundColor: "#2f3E46",
        textTransform: "uppercase",
        textAlign: "center",
        color: "white",
        fontSize: "2em",
        padding: 0,
        width: "100vw"
      }}
    >
      15% Off Your First Service for All New Clients
    </div>

    <Window classes={["window-index"]}>

      <VerticalCenter classes={["vertical-center-index"]}>
        <Container>

          <Columns>

            <Column
              styles={{
                backgroundColor: "#2f3e46", 
                padding: 0
              }}
            >
              <h1 
                style={{
                  fontSize: "72px", 
                  color: "white",
                  marginLeft: "20px"
                }}
              >
                Spa Riley: Putting Self Love First
              </h1>
            </Column>
            
            <Column styles={{padding: 0}}>
              <Img 
                fluid={data.stones.childImageSharp.fluid} 
                style={{border: "10px solid #2f3E46"}}
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