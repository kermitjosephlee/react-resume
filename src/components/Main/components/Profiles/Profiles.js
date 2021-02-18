import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import "./Profiles.css"
import "../Section/Section.css"

export function Profiles ({basics}){
  return(
    <div className="section">
      <div className="title-container">
        <div className="title">
          Profiles
        </div>
      </div>
      <div className="profiles-container">
        {basics.profiles.map((profile) => (
          <a href={profile.url} key={profile.network}>
            <div key={profile.network} className="profile-container">
              <div className="profile-icon">
                {profile.network.toUpperCase() === "GITHUB" ? <FontAwesomeIcon icon={faGithub} className="github" /> : <FontAwesomeIcon icon={faLinkedin} className="linkedin" />}
              </div>
              <div>
                {profile.username}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}