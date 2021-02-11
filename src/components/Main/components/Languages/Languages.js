import React from "react"
import "./Languages.css"
import "../Section/Section.css"

export function Languages ({ languages }){
  return (
    <div className="section">
      <div className="title-container">
        <div className="title">Languages</div>
      </div>
      <div>{languages.map((language) => (
        <>
          <div>{language.language} - {language.fluency}</div>
        </>
      ))}</div>
    </div>
  )
}