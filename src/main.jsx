import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RoboContextProvider } from "./Context/ContextAPI.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RoboContextProvider>
			<App />
		</RoboContextProvider>
	</React.StrictMode>
);
