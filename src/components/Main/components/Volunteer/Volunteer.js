import React from "react";
import "./Volunteer.css";
import "../Section/Section.css";
import { VolunteerEntry } from "./components";

export function Volunteer({ volunteer }) {
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
