import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import Header from "./Component/Header";
import Cards from "./Component/cards";
import ClipLoader from "react-spinners/ClipLoader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import SearchedImage from "./Component/SearchedImage";
import { RoboContext } from "./Context/ContextAPI";

function App() {
	const [load, setLoad] = useState(true);
	const { value } = useContext(RoboContext);
	const [error, setError] = useState(null); // Add error state

	useEffect(() => {
		fetchData(); // Move data fetching logic to a separate function
	}, []);

	async function fetchData() {
		try {
			// Your data fetching logic here
			setTimeout(() => {
				setLoad(false);
			}, 3000);
		} catch (error) {
			setError(error); // Handle errors and set the error state
		}
	}

	return (
		<Router>
			<div>
				{load ? (
					<div className="loader">
						<ClipLoader
							color={"#36d7b7"}
							loading={load}
							size={150}
							aria-label="Loading Spinner"
							data-testid="loader"
						/>
					</div>
				) : (
					<div>
						<Header />
						<Cards />

						{/* <Routes>
							<Route path="/" element={<Home />} />
							<Route path={`/search/${value}`} element={<SearchedImage />} />
						</Routes> */}

						{/* Display an error message if an error occurred */}
						{error && <p>Error: {error.message}</p>}
					</div>
				)}
			</div>
		</Router>
	);
}

export default App;
