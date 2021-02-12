import React, {useState} from "react"
import getUnixTime from "date-fns/getUnixTime"
import format from "date-fns/format"
import "../../Work/components/WorkEntry/WorkEntry.css"

export function EducationEntry ({educationEntry}){
  const [isUnixTime, setIsUnitTime] = useState(false)
  const { institution, area, studyType, startDate, endDate} = educationEntry
  const dateFormat = "MMM yyyy"
  const start = new Date(startDate.replace("-", ", "))
  const end = new Date(endDate.replace("-", ", "))
  const startTime = isUnixTime ? getUnixTime(start) : format(start, dateFormat)
  const endTime = isUnixTime ? getUnixTime(end) : format(end, dateFormat)

  return (
    <div className="work-entry-container">
      <div className="top-container">
        <div className="company">{institution}</div>
        <div className="position">{area}</div>
      </div>
      <div className="middle-container">
      <div className="website">
          {studyType}
        </div>       
        <div className="interval" onClick={() => setIsUnitTime(!isUnixTime)}>
          {startTime} - {endTime}
        </div>
      </div>
    </div>
  )
}