import React, { useContext } from "react";
import { ResumeContext } from "../../../contexts/ResumeContext";
import "./Interests.css";
import "../Section/Section.css";

export function Interests() {
	const { interests } = useContext(ResumeContext);

	return (
		<div className="section">
			<div className="title-container">
				<div className="title">Interests</div>
			</div>
			<div className="interests-list">
				{interests[0].keywords.map((interest) => (
					<span key={interest} className="interests-list-item">
						{interest}
					</span>
				))}
			</div>
		</div>
	);
}
