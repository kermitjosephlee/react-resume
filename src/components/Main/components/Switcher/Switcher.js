import React from "react"
import "./Switcher.css"
import "../Section/Section.css"

export function Switcher ({showResume, setShowResume}){
  return (
    <div className="section">
      <div className="title-container">
        <div className="title">OnClick</div>
      </div>
      <div className="switcher" onClick={() => setShowResume(!showResume)}>
        {showResume ? `() => showCaseStudy()` : `() => showResume()`}
      </div>
    </div>

  )
}