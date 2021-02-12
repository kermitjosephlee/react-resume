import React, { useState } from "react"
import { WorkEntry } from "./components"
import "./Work.css"
import "../Section/Section.css"

export function Work ({work}){
  const [codeOnly, setCodeOnly] = useState(true)
  return (
    <div className="section">
      <div className="title-container">
        <div className="title">
          Work
        </div>
      </div>
      <div className="work-entries">
        {work.map((workEntry) => {
          if (codeOnly && !workEntry.isCodeRelated) return null
          return (
            <WorkEntry key={workEntry.company} workEntry={workEntry}/>
          )
        })}
        {codeOnly && <div className="show-more" onClick={() => setCodeOnly(!codeOnly)}>
          Show More
        </div>}
      </div>
    </div>
  )
}