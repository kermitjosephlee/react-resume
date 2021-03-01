import React from "react";
import "./Skills.css";
import "../Section/Section.css";

export function Skills({ skills }) {
	return (
		<div className="section">
			<div className="title-container">
				<div className="title">Skills</div>
			</div>
			<div>
				<ul className="skills-list">
					{skills.keywords.map((skill) => {
						return (
							<li key={skill} className="skills-list-item">
								{skill}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
