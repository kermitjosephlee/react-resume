import React, { useState } from "react"
import './Main.css'
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

export default function Main (){
  const [showResume, setShowResume] = useState(true) 
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isJson, setIsJson] = useState(false)

  const { basics, work, education, volunteer, skills, languages, interests } = resume

  return (
    <div className={isDarkMode ? "main dark" : "main"}>
          <Header basics={basics} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isJson={isJson} setIsJson={setIsJson} />
          <Switcher showResume={showResume} setShowResume={setShowResume} />
      {!isJson && showResume ? (
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
      ) : (
        <CaseStudy />
      )}
      {isJson && <div className="pre"><pre>{JSON.stringify(resume, null, 2)}</pre></div>}
    </div>
  )
}