import React from "react"
import "./Header.css"
import "../Section/Section.css"

export function Header({basics, isDarkMode, setIsDarkMode}) {
  const {name, label} = basics
  return (
    <div className="section header">
      <div className="title-container" onClick={() => setIsDarkMode(!isDarkMode)}>
        <img className="headshot" src={basics.picture} alt="joe's headshot" width="100" height="100"/>
      </div>
      <div className="name-container">
        <div className="name">{name}</div>
        <div className="label">{label}</div>
      </div>
    </div>
  )
}