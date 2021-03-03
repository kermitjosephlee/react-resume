import React, { useState, useContext } from "react";
import { ResumeContext } from "../../../contexts/ResumeContext";
import { DarkContext } from "../../../contexts/DarkContext";
import { WorkEntry } from "./components";
import "./Work.css";
import "../Section/Section.css";

export function Work() {
	const [codeOnly, setCodeOnly] = useState(true);
	const { work } = useContext(ResumeContext);
	const { isDarkMode } = useContext(DarkContext);

	function ShowMoreButton() {
		if (!codeOnly) return null;
		return (
			<div
				className={isDarkMode ? "show-more-dark" : "show-more"}
				onClick={() => setCodeOnly(!codeOnly)}
			>
				Show More
			</div>
		);
	}

	return (
		<div className="section">
			<div className="title-container">
				<div className="title">Work</div>
			</div>
			<div className="work-entries">
				{work.map((workEntry) => {
					if (codeOnly && !workEntry.isCodeRelated) return null;
					return <WorkEntry key={workEntry.company} workEntry={workEntry} />;
				})}
				<ShowMoreButton />
			</div>
		</div>
	);
}
