import React, { useContext, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import { RoboContext } from "../Context/ContextAPI";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
	const { value, setValue, setImage, setClick } = useContext(RoboContext);
	// const navigate = useNavigate();

	const search = (e) => {
		setValue(e.target.value);
	};

	const clickHandle = () => {
		const imglocation = `https://robohash.org/${value}.png`;
		setImage(imglocation);
		setClick(true);
		// setSearched(true);

		// Navigate to the "SearchedImage" route with the search query as a URL parameter
		// navigate(`/SearchedImage/${value}`);
	};

	return (
		<div className="header-container">
			<div className="search-bar">
				<input
					type="text"
					placeholder="search robo cards"
					className="input-card"
					onChange={search}
					value={value}
				/>
				{/* Use a button within the Link */}
				{/* <Link to="/SearchedImage"> */}
				<button className="search-button" onClick={clickHandle}>
					<SearchIcon />
				</button>
				{/* </Link> */}
			</div>
		</div>
	);
}
