import React from "react";

const Jumbotron = (props) => {
	return (
		<div className="jumbotron jumbotron-fluid">
			<h1 className="display-8">Welcome to react</h1>
			<p className="lead">
				React is the most popular rendering library in the world
			</p>
			<a
				className="btn btn-primary btn-lg"
				href="https://reactjs.org/"
				role="button">
				Go to the official website
			</a>
		</div>
	);
};

export default Jumbotron;
