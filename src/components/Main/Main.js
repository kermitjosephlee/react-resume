import React, { useState, useContext } from "react";
import { DarkProvider, DarkContext } from "../contexts/DarkContext";
import { ResumeProvider, ResumeContext } from "../contexts/ResumeContext";

import {
	About,
	CaseStudy,
	Contact,
	Education,
	Header,
	Languages,
	Interests,
	Profiles,
	Skills,
	Switcher,
	Volunteer,
	Work,
} from "./components";
import "./Main.css";

export default function Main() {
	const [showResume, setShowResume] = useState(true);
	const [isJson, setIsJson] = useState(false);
	const resume = useContext(ResumeContext);

	const showJson = () => {
		return showResume ? setIsJson(!isJson) : null;
	};

	return (
		<ResumeProvider>
			<DarkProvider>
				<DarkContext.Consumer>
					{({ isDarkMode }) => (
						<div className={isDarkMode ? "main dark" : "main"}>
							<Header showJson={showJson} />
							{!isJson && (
								<Switcher
									showResume={showResume}
									setShowResume={setShowResume}
									showJson={showJson}
								/>
							)}
							{!isJson && showResume && (
								<>
									<Contact />
									<About />
									<Profiles />
									<Work />
									<Education />
									<Volunteer />
									<Skills />
									<Languages />
									<Interests />
								</>
							)}
							{!showResume && <CaseStudy />}
							{isJson && (
								<div className="pre">
									<pre>{JSON.stringify(resume, null, 2)}</pre>
								</div>
							)}
						</div>
					)}
				</DarkContext.Consumer>
			</DarkProvider>
		</ResumeProvider>
	);
}
