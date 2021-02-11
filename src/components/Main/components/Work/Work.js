import React from "react"
import { WorkEntry } from "./components"
import "./Work.css"
import "../Section/Section.css"

export function Work ({work}){
  return (
    <div className="section">
      <div className="title-container">
        <div className="title">
          Work
        </div>
      </div>
      <div className="work-entries">
        {work.map((workEntry) => {
          if (!workEntry.isCodeRelated) return null
          return (
            <WorkEntry key={workEntry.company} workEntry={workEntry}/>
          )
        })}
      </div>
    </div>
  )
}