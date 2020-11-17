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
import VerticalCenterFlex from "../components/layout/vertical-center-flex"

const IndexPage = ( {data} ) => (
  <Layout>

    <SEO title="Home" image={data.ogImagePath.childImageSharp.fixed.src} />

    <div 
      style={{
        // marginTop: "30px",
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
      <VerticalCenterFlex>
        15% Off Your First Service for All New Clients
      </VerticalCenterFlex>

    </div>

    <div 
      style={{
        margin: `0px auto`,
        maxWidth: 960,
        paddingLeft: `1.0875rem`,
        paddingRight: `1.0875rem`
      }}
    >
      <Window classes={["window-index"]}>
  
        <VerticalCenter classes={["vertical-center-index"]}>
          <Container>
  
            <Columns>
  
              <Column
                styles={{
                  backgroundColor: "#2f3e46", 
                  padding: 0,
                }}
              >
                <VerticalCenterFlex>
                  <h1 
                    style={{
                      fontSize: "72px", 
                      color: "white",
                      marginLeft: "40px"
                    }}
                  >
                    Spa Riley: Putting Self Love First
                  </h1>
                </VerticalCenterFlex>
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
    </div>

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