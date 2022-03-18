import React from "react";
import List from "./lista.jsx";
import "../../styles/index.css";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div>
			<h1>To-do List</h1>
			<List />
		</div>
	);
};

export default Home;
