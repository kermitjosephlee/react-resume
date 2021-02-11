import React from "react"
import "./About.css"
import "../Section/Section.css"

export function About ({basics}){
  return (
    <div className="section">
      <div className="title-container">
        <div className="title">
          About
        </div>
      </div>
      <div className="summary">
        {basics.summary}
      </div>
    </div>
  )
}