import React, { useState } from "react";
import "./Main.css";
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
import { DarkProvider, DarkContext } from "../contexts/DarkContext";
import { resume } from "../common";

export default function Main() {
	const [showResume, setShowResume] = useState(true);
	const [isJson, setIsJson] = useState(false);

	const showJson = () => {
		return showResume ? setIsJson(!isJson) : null;
	};

	const {
		basics,
		work,
		education,
		volunteer,
		skills,
		languages,
		interests,
	} = resume;

	return (
		<DarkProvider>
			<DarkContext.Consumer>
				{({ isDarkMode }) => (
					<div className={isDarkMode ? "main dark" : "main"}>
						<Header basics={basics} showJson={showJson} />
						{!isJson && (
							<Switcher
								showResume={showResume}
								setShowResume={setShowResume}
								showJson={showJson}
							/>
						)}
						{!isJson && showResume && (
							<>
								<Contact basics={basics} />
								<About basics={basics} />
								<Profiles basics={basics} />
								<Work work={work} />
								<Education education={education} />
								<Volunteer volunteer={volunteer} />
								<Skills skills={skills} />
								<Languages languages={languages} />
								<Interests interests={interests} />
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
	);
}
