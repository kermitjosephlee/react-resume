import React, { useContext } from "react";
import { ResumeContext } from "../../../contexts/ResumeContext";
// import { DarkContext } from "../../../contexts/DarkContext";
import "./Projects.css";
import "../Section/Section.css";
import "../Work/components/WorkEntry/WorkEntry.css";

export function Projects() {
	const { projects } = useContext(ResumeContext);
	// const { isDarkMode } = useContext(DarkContext);

	return (
		<div className="section">
			<div className="title-container">
				<div className="title">Projects</div>
			</div>
			<div className="work-entries">
				{projects.map(({ name, stack, repoURL, summary }) => (
					<div className="work-entry-container">
						<div className="top-container">
							<div className="company">{name}</div>
						</div>
						<div className="middle-container">
							<div className="website project-website">
								{!!repoURL && <a href={repoURL}>{repoURL}</a>}
							</div>
						</div>

						<div className="stack-container">
							<div className="stack-summary">{summary}</div>
							<div className="stack-list">
								{stack.map((item) => (
									<div className="stack-item">
										<em>{item}</em>
									</div>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
