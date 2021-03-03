import React from "react";
import { resume } from "../common";

export const ResumeContext = React.createContext(resume);

export function ResumeProvider(props) {
	return (
		<ResumeContext.Provider value={resume}>
			{props.children}
		</ResumeContext.Provider>
	);
}
