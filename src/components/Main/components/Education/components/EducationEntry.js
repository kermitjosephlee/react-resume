import React from "react"
import "../../Work/components/WorkEntry/WorkEntry.css"

export function EducationEntry ({educationEntry}){
  return (
    <div className="work-entry-container">
      <div className="top-container">
        <div className="company">{educationEntry.institution}</div>
        <div className="position">{educationEntry.area}</div>
      </div>
      <div className="middle-container">
      <div className="website">
          {educationEntry.studyType}
        </div>       
        <div>
          {educationEntry.startDate} - {educationEntry.endDate}
        </div>
      </div>
    </div>
  )
}