import React, { useState } from "react"
import getUnixTime from "date-fns/getUnixTime"
import format from "date-fns/format"
import "./WorkEntry.css"

export function WorkEntry ({workEntry}){
  const [isUnixTime, setIsUnitTime] = useState(false)
  const { company, position, website, startDate, endDate, summary, highlights } = workEntry
  const dateFormat = "MMM yyyy"
  const start = new Date(startDate.replace("-", ", "))
  const end = new Date(endDate.replace("-", ", "))
  const startTime = isUnixTime ? getUnixTime(start) : format(start, dateFormat)
  const endTime = isUnixTime ? getUnixTime(end) : format(end, dateFormat)

  return (
    <div className="work-entry-container">
      <div className="top-container">
        <div className="company">{company}</div>
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
      <div>
      <ul className="bottom-container">
        {!!summary && <li className="list-item">{summary}</li>}
      
        {!!highlights && highlights.map((highlight, i) => {
          return (
            <li key={i} className="list-item">
              {highlight}
            </li>
          )
        })}
      </ul>
      </div>
    </div>
  )
}