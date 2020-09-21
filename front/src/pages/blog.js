import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"

export const query = graphql`
  {
    allStrapiBlogs {
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

const Blog = ({
  data:{
    allStrapiBlogs:{
      edges:
        blogs
    }
  }
}) => {
  console.log(blogs)
  return (
    <Layout>
      <section className="blog-page">
        <Blogs blogs={blogs} title="blog" />
      </section>
    </Layout>
  )
}

export default Blog
