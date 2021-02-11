import React from "react"
import "./Interests.css"
import "../Section/Section.css"

export function Interests ({ interests }){
  return (
    <div className="section">
      <div className="title-container">
        <div className="title">Interests</div>
      </div>
      <div>
        {interests[0].keywords.map(interest => (
          <span className="interests-list-item">
            {interest}
          </span>
        ))}
      </div>
    </div>
  )
}