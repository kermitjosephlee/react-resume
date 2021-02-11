import React from "react"
import "./Skills.css"
import "../Section/Section.css"

export function Skills ({skills}){
  return (
    <div className="section">
      <div className="title-container">
        <div className="title">
          Skills
        </div>
      </div>
      <div>
        {/* <div>
          {skills.name} - {skills.level}
        </div> */}
        <ul className="skills-list-item">
          {skills.keywords.map(skill => {
            return(
              <li key={skill}>
                {skill}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}