import React from "react"
import { useSpring, animated } from "react-spring"
import "./Header.css"
import "../Section/Section.css"

export function Header({basics, isDarkMode, setIsDarkMode, showJson}) {
  const {name, label} = basics
  const props = useSpring({opacity: 1, from: { opacity: 0 }, config: { duration: 1000 }})

  return (
    <div className="header">
      <animated.div style={props} className="title-container" onClick={() => setIsDarkMode(!isDarkMode)}>
        <img className="headshot" src={basics.picture} alt="joe's headshot" width="100" height="100"/>
      </animated.div>
      <div className="name-container" onClick={() => showJson()}>
        <div className="name">{name}</div>
        <div className="label">{label}</div>
      </div>
    </div>
  )
}
