import React from "react"
// import { intervalMaker } from "../../../../common/intervalMaker"
import "../../Work/components/WorkEntry/WorkEntry.css"

export function EducationEntry ({educationEntry}){
  // const [isUnixTime, setIsUnitTime] = useState(false)
  // const { institution, area, studyType, startDate, endDate} = educationEntry
  const { institution, area, studyType} = educationEntry

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
        {/* <div className="interval" onClick={() => setIsUnitTime(!isUnixTime)}>
          {intervalMaker(startDate, endDate, isUnixTime)}
        </div> */}
      </div>
    </div>
  )
}