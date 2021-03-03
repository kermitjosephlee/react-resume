import React, { useContext } from "react";
import { DarkContext } from "../../../contexts/DarkContext";
import { ResumeContext } from "../../../contexts/ResumeContext";
import "./Header.css";
import "../Section/Section.css";

export function Header({ showJson }) {
	const { isDarkMode, setIsDarkMode } = useContext(DarkContext);
	const {
		basics: { name, label, picture },
	} = useContext(ResumeContext);

	return (
		<div className="header">
			<div
				className="title-container"
				onClick={() => setIsDarkMode(!isDarkMode)}
			>
				<img
					className="headshot"
					src={picture}
					alt="joe's headshot"
					width="100"
					height="100"
				/>
			</div>
			<div className="name-container" onClick={() => showJson()}>
				<div className="name">{name}</div>
				<div className="label">{label}</div>
			</div>
		</div>
	);
}
