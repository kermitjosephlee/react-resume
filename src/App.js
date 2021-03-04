import { Main } from "./components";
import { ResumeProvider } from "./components/contexts/ResumeContext";
import { DarkProvider } from "./components/contexts/DarkContext";

function App() {
	return (
		<ResumeProvider>
			<DarkProvider>
				<Main />
			</DarkProvider>
		</ResumeProvider>
	);
}

export default App;
