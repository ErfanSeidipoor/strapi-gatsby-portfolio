import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"


export const query = graphql`
  {
    allStrapiProjects {
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
  }
`

const ProjectsPage = ({
  data:{allStrapiProjects:{nodes:projects}}
}) => {
  return (
    <Layout >
      <section className="projects-page">
        <Projects
          projects={projects}
          showLink={false}
          title={"All Projects"}
        />
      </section>
    </Layout>
  )
}

export default ProjectsPage
