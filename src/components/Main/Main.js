import React, { useState } from "react"
import './Main.css'
import { 
  Header, 
  Contact, 
  About, 
  Profiles, 
  Work, 
  Education, 
  Volunteer, 
  Skills, 
  Languages, 
  Interests 
} from "./components"
import { resume } from "../common"

export default function Main (){
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isJson, setIsJson] = useState(false)
  const { basics, work, education, volunteer, skills, languages, interests } = resume

  return (
    <div className={isDarkMode ? "main dark" : "main"}>
          <Header basics={basics} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isJson={isJson} setIsJson={setIsJson} />
      {!isJson && (
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
      {isJson && <div className="pre"><pre>{JSON.stringify(resume, null, 2)}</pre></div>}
    </div>
  )
}