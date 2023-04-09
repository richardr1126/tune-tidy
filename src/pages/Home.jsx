// This is a component that renders the home page of our app

import React from "react";
import HelloComponent from "../components/HelloComponent";

function Home() {
	

	return (
		<div className="container is-max-desktop" style={{paddingTop: '5rem'}}>
			<HelloComponent name="Richard" />
		</div>
	);
}

export default Home;