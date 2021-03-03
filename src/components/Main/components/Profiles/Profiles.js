import React, { useContext } from "react";
import { ResumeContext } from "../../../contexts/ResumeContext";
import "./Profiles.css";
import "../Section/Section.css";

export function Profiles() {
	const {
		basics: { profiles },
	} = useContext(ResumeContext);
	return (
		<div className="section">
			<div className="title-container">
				<div className="title">Profiles</div>
			</div>
			<div className="profiles-container">
				{profiles.map((profile) => (
					<div key={profile.network} className="profile-container">
						<div className="profile-title">{profile.network}</div>
						<div>
							<a href={profile.url}>{profile.username}</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
