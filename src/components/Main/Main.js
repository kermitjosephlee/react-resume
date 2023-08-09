import React, { useState, useContext } from "react";
import { DarkContext } from "../contexts/DarkContext";
import { ResumeContext } from "../contexts/ResumeContext";

import {
	About,
	// CaseStudy,
	Contact,
	Education,
	Header,
	Languages,
	Interests,
	Profiles,
	Projects,
	Skills,
	// Switcher,
	Volunteer,
	Work,
} from "./components";
import "./Main.css";

export default function Main() {
	// const [showResume, setShowResume] = useState(true);
	const showResume = true;
	const [isJson, setIsJson] = useState(false);
	const resume = useContext(ResumeContext);
	const { isDarkMode } = useContext(DarkContext);

	const showJson = () => {
		return showResume ? setIsJson(!isJson) : null;
	};

	return (
		<div className={isDarkMode ? "main dark" : "main"}>
			<Header showJson={showJson} />
			{/* {!isJson && (
				<Switcher
					showResume={showResume}
					setShowResume={setShowResume}
					showJson={showJson}
				/>
			)} */}
			{!isJson && showResume && (
				<>
					<Contact />
					<About />
					<Profiles />
					<Work />
					<Projects />
					<Education />
					<Volunteer />
					<Skills />
					<Languages />
					<Interests />
				</>
			)}
			{/* {!showResume && <CaseStudy />} */}
			{isJson && (
				<div className="pre">
					<pre>{JSON.stringify(resume, null, 2)}</pre>
				</div>
			)}
		</div>
	);
}
