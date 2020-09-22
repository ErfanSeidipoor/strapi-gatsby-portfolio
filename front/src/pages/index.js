import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        strapiId
        title
        url
        github
        description
        id
        stack {
          title
          id
        }
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allStrapiBlogs(limit: 3, sort: {fields: date}) {
      edges {
        node {
          id
          slug
          strapiId
          title
          category
          date(formatString: "MMM Do, YYYY")
          description
          content
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`


export default () => {
  const data = useStaticQuery(query)
  const  {
    allStrapiProjects: {nodes: projects},
    allStrapiBlogs: {edges: blogs},
  } = data

  return (
    <Layout>
      <SEO title={'Home'} description="This is our home page"/>
      <Hero />
      <Services />
      <Jobs />
      <Projects
        projects={projects}
        title={"Featured Projects"}
        showLink
      />
      <Blogs
        blogs={blogs}
        title={"Blogs"}
        showLink
      />
    </Layout>
  )
}
