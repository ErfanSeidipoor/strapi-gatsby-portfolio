import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import SEO from "../components/SEO"

export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        id
        info
        stack {
          id
          title
        }
        strapiId
        title
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`

const About = ({
  data:{
    allStrapiAbout: {
      nodes: nodes
    }
  }
}) => {

  const { info, title, stack, image} = nodes[0]

  return (
    <Layout>
      <SEO title={'About'} description="about webDev"/>
      <section className="about-page">
        <div className="section-center about-center">
          <Image
            fluid={image.childImageSharp.fluid}
            className="about-img"
          />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {
                stack.map(item=><span key={item.id} >{item.title}</span>)
              }
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default About
