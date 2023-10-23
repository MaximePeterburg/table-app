import "./App.css";
import Gallery from "./components/Gallery/Gallery";
import Table from "./components/Table/Table";

function App() {
	return (
		<main className="flex flex-col gap-4">
			<Table />
			<Gallery />
		</main>
	);
}

export default App;
