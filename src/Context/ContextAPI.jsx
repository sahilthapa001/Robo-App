import React, { createContext, useEffect, useState } from "react";

//creating a context
export const RoboContext = createContext();

// create a context provider component
export const RoboContextProvider = ({ children }) => {
	const [img, setImg] = useState([]);
	const [loading, setLoading] = useState(true);
	const [value, setValue] = useState("");
	const [image, setImage] = useState("");
	const [click, setClick] = useState(false);

	async function fetchData() {
		try {
			let temp = [];
			let cc = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(async (cc, index) => {
				const response = await fetch(`https://robohash.org/${cc}.png`);
				if (!response.ok) {
					throw new Error("Network response was not ok ");
				}
				const imgUrl = response.url;
				setImg((prev) => [...prev, imgUrl]);

				temp[index] = imgUrl;
			});
			setLoading(true);
		} catch (error) {
			console.error("Error fetching Data", error);
			setLoading(false);
		}
	}
	// const generateRandomWord = () => {
	// 	//define a list of characters to choose from
	// 	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	// 	const length = 8; //you can adjust the length of the random words as needed

	// 	let result = "";
	// 	for (let i = 0; i < length; i++) {
	// 		const randomIndex = Math.floor(Math.random() * characters.length);
	// 		result += characters.charAt(randomIndex);
	// 	}
	// 	setRandomWord(result);
	// };
	// useEffect(() => {
	// 	generateRandomWord();
	// }, []);
	useEffect(() => {
		if (loading != "loaded") {
			fetchData();
		}
	}, [loading]);

	// console.log(img);
	const RoboContextValue = {
		img,
		loading,
		value,
		image,
		setValue,
		setImage,
		click,
		setClick,
		// searched,
		// setSearched,
	};

	return (
		<RoboContext.Provider value={RoboContextValue}>
			{children}
		</RoboContext.Provider>
	);
};
