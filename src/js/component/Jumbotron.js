import React from "react";

const Jumbotron = (props) => {
	return (
		<div class="jumbotron jumbotron-fluid">
			<h1 class="display-8">Welcome to react</h1>
			<p class="lead">
				React is the most popular rendering library in the world
			</p>
			<a
				class="btn btn-primary btn-lg"
				href="https://reactjs.org/"
				role="button">
				Go to the official website
			</a>
		</div>
	);
};

export default Jumbotron;
