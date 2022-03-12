import React from "react";
import List from "./lista.jsx";
import "../../styles/index.css";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<List />
		</div>
	);
};

export default Home;
