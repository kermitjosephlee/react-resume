import React, { useState } from "react"
import { getUnixTime, format } from "date-fns"
import "../../../Work/components/WorkEntry/WorkEntry.css"

export function VolunteerEntry({ volunteerEntry }) {
  const [isUnixTime, setIsUnitTime] = useState(false)
  const { organization, position, website, startDate, endDate, summary } = volunteerEntry
  const dateFormat = "MMM yyyy"
  const start = new Date(startDate.replace("-", ", "))
  const end = new Date(endDate.replace("-", ", "))
  const startTime = isUnixTime ? getUnixTime(start) : format(start, dateFormat)
  const endTime = isUnixTime ? getUnixTime(end) : format(end, dateFormat)

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
        <div className="interval" onClick={() => setIsUnitTime(!isUnixTime)}>
          {startTime} - {endTime}
        </div>
      </div>
      <ul className="bottom-container">
        {!!summary && <li className="list-item">{summary}</li>}
      </ul>
    </div>
  )
}