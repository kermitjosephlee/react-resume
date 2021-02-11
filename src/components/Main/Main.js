import React from "react"
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
  const { basics, work, education, volunteer, skills, languages, interests } = resume

  return (
    <div className="main">
      <Header basics={basics} />
      <Contact basics={basics} />
      <About basics={basics} />
      <Profiles basics={basics} />
      <Work work={work} />
      <Education education={education} />
      <Volunteer volunteer={volunteer} />
      <Skills skills={skills} />
      <Languages languages={languages} />
      <Interests interests={interests} />
      {/* <pre>{JSON.stringify(resume, null, 2)}</pre> */}
    </div>
  )
}