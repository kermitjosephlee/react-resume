import React from "react";
import { EducationEntry } from "./components";
import "./Education.css";
import "../Section/Section.css";

export function Education({ education }) {
	return (
		<div className="section">
			<div className="title-container">
				<div className="title">Education</div>
			</div>
			<div className="education-entries">
				{education.map((educationEntry) => (
					<EducationEntry
						key={educationEntry.institution}
						educationEntry={educationEntry}
					/>
				))}
			</div>
		</div>
	);
}
