import React, { useState } from "react"
import { 
  About, 
  CaseStudy,
  Contact, 
  Education, 
  Header, 
  Languages, 
  Interests, 
  Profiles, 
  Skills,
  Switcher, 
  Volunteer, 
  Work, 
} from "./components"
import { resume } from "../common"
import './Main.css'

export default function Main (){
  const [showResume, setShowResume] = useState(true) 
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isJson, setIsJson] = useState(false)

  const showJson = () => {
    return showResume ? setIsJson(!isJson) : null
  }

  const { basics, work, education, volunteer, skills, languages, interests } = resume

  return (
    <div className={isDarkMode ? "main dark" : "main"}>
          <Header basics={basics} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} showJson={showJson} />
      {!isJson && <Switcher showResume={showResume} setShowResume={setShowResume} showJson={showJson} />}
      {!isJson && showResume && (
        <>
          <Contact basics={basics} />
          <About basics={basics} />
          <Profiles basics={basics} />
          <Work work={work} isDarkMode={isDarkMode}/>
          <Education education={education} />
          <Volunteer volunteer={volunteer} />
          <Skills skills={skills} />
          <Languages languages={languages} />
          <Interests interests={interests} />
        </>
      )} 
      {!showResume && <CaseStudy />}
      {isJson && <div className="pre"><pre>{JSON.stringify(resume, null, 2)}</pre></div>}
    </div>
  )
}