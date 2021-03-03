import React, { useContext } from "react";
import { ResumeContext } from "../../../contexts/ResumeContext";
import "./About.css";
import "../Section/Section.css";
import "../Work/components/WorkEntry/WorkEntry.css";

export function About() {
	const {
		basics: { summary },
	} = useContext(ResumeContext);

	return (
		<div className="section">
			<div className="title-container">
				<div className="title">About</div>
			</div>
			<div className="work-entries">
				<div className="work-entry-container summary">{summary}</div>
			</div>
		</div>
	);
}
