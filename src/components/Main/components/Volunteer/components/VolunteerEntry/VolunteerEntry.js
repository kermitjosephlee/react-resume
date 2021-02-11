import React from "react"
import "../../../Work/components/WorkEntry/WorkEntry.css"

export function VolunteerEntry({ volunteerEntry }) {
  const { organization, position, website, startDate, endDate, summary } = volunteerEntry
  return (
    <div className="work-entry-container">
      <div className="top-container">
        <div className="company">
          {organization}
        </div>
        <div className="position">{position}</div>
      </div>
      <div className="middle-container">
        <div className="website">
          {!!website && <a href={website}>{website}</a>}
        </div>  
        <div>
          {startDate} - {endDate}
        </div>
      </div>
      <ul className="bottom-container">
        {!!summary && <li className="list-item">{summary}</li>}
      </ul>
    </div>
  )
}