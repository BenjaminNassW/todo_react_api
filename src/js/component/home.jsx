import React from "react";
import List from "./lista.jsx";
import "../../styles/index.css";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import MyControlledInput from "./inputValue.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<List />
			<MyControlledInput />
		</div>
	);
};

export default Home;
