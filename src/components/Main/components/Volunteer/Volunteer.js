import React, { useContext } from "react";
import { ResumeContext } from "../../../contexts/ResumeContext";
import "./Volunteer.css";
import "../Section/Section.css";
import { VolunteerEntry } from "./components";

export function Volunteer() {
	const { volunteer } = useContext(ResumeContext);
	return (
		<div className="section">
			<div className="title-container">
				<div className="title">Volunteer</div>
			</div>
			<div className="volunteer-entries">
				{volunteer.map((volunteerEntry) => (
					<VolunteerEntry
						key={volunteerEntry.organization}
						volunteerEntry={volunteerEntry}
					/>
				))}
			</div>
		</div>
	);
}
