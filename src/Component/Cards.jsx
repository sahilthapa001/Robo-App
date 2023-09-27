import React, { useContext } from "react";
import { RoboContext } from "../Context/ContextAPI";
import "./Cards.css";

const Cards = () => {
	const { value, img, image, loading, click, setClick } =
		useContext(RoboContext);
	if (!value) {
		setClick(false);
	}

	return (
		<div className="Card-container">
			{value && click ? (
				<div className="searchCard-conatiner">
					<h2 className="search-text">Search Result for {value} :</h2>
					<img src={image} alt={`Robot image ${value}`} />
				</div>
			) : loading === "loading" ? (
				<div>Loading...</div>
			) : (
				<div className="robo-card">
					{img.map((image, index) => (
						<img key={index} src={image} alt={`Robo Image ${index}`} />
					))}
				</div>
			)}
		</div>
	);
};

export default Cards;
