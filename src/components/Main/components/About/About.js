import React from "react"
import "./About.css"
import "../Section/Section.css"
import "../Work/components/WorkEntry/WorkEntry.css"

export function About ({basics}){
  return (
    <div className="section">
      <div className="title-container">
        <div className="title">
          About
        </div>
      </div>
      <div className="work-entries">
        <div className="work-entry-container summary">
          {basics.summary}
        </div>
      </div>
    </div>
  )
}