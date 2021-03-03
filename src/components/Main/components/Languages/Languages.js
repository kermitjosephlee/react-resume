import React, { useContext } from "react";
import { ResumeContext } from "../../../contexts/ResumeContext";
import "./Languages.css";
import "../Section/Section.css";

export function Languages() {
	const { languages } = useContext(ResumeContext);

	return (
		<div className="section">
			<div className="title-container">
				<div className="title">Languages</div>
			</div>
			<div>
				{languages.map((language) => (
					<div key={language.language}>
						{language.language} - {language.fluency}
					</div>
				))}
			</div>
		</div>
	);
}
