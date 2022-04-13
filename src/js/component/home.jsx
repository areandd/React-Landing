import React from "react";
import Navbar from "./Navbar.js";
import Jumbotron from "./Jumbotron.js";
import Card from "./Card.js";
import Credit from "./Credit.js";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<Navbar />
			<Jumbotron />
			<Card />
		</div>
	);
};

export default Home;
