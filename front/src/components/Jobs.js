import React from "react"
import Title from "./Title"
import { FaAlignRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: {fields: id, order: DESC}) {
      nodes {
        id
        company
        date
        position
        strapiId
        desc {
          name
          id
        }
      }
    }
  }
`


const Jobs = () => {

  const {allStrapiJobs:{nodes:jobs}}  = useStaticQuery(query)
  const [value, setValue] = React.useState(0)
  
  const {
    id,
    company,
    date,
    position,
    desc,
   } = jobs[value]

  const renderBtnContainer = ()=> {
    return (
      <div className="btn-container">
        {
          jobs.map( (item, index)=> {
            return (
              <button
                key={item.strapiId}
                className={`job-btn ${value===index && 'active-btn'}`}
                onClick={()=>setValue(index)}
              >
                {item.company}
              </button>
            )
          })
        }
      </div>
    )
  }

  const renderJobInfo = ()=> {
    return (
      <div className="job-info">
        <h3>{position}</h3>
        <h4>{company}</h4>
        <p className="job-info">{date}</p>
        {
          desc.map( item=> (
            <div key={item.id} className="job-desc">
              <FaAlignRight className="job-icon"></FaAlignRight>
              <p>{item.name}</p>
            </div>
          )) 
        }

      </div>
    )
  } 

  return (
    <section className="section jobs">
      <Title title="experiance" />
      <div className="jobs-center">
        {renderBtnContainer()}
        {renderJobInfo()}
      </div>
      <Link to="/about" className="btn center-btn">
        {"More Info"}
      </Link>
    </section>
  )
}

export default Jobs
