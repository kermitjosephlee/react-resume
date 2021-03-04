import React, { useState } from "react";

export const DarkContext = React.createContext(null);

export function DarkProvider(props) {
	const [isDarkMode, setIsDarkMode] = useState(false);

	return (
		<DarkContext.Provider value={{ isDarkMode, setIsDarkMode }}>
			{props.children}
		</DarkContext.Provider>
	);
}
