import React, { useState } from "react";
import "./App.css";
import IMG from "./bg.png";
import Text from "./components/text";
import Characters from "./components/characters";
import Locations from "./components/locations";

function App() {
	const [char, setChar] = useState(false);
	const [locat, setLocat] = useState(false);

	const charF = () => {
		setChar(true);
		setLocat(false);
	};

	const locF = () => {
		setLocat(true);
		setChar(false);
	};

	return (
		<div className="App">
			<button className="charactersBtn" onClick={charF}>
				Characters
			</button>
			<button className="locationsBtn" onClick={locF}>
				Locations
			</button>
			{!char && !locat ? (
				<div>
					<img className="bgImage" src={IMG} alt="" />
					<Text />
				</div>
			) : (
				<div className="card">
					{char && <Characters />}
					{locat && <Locations />}
				</div>
			)}
		</div>
	);
}

export default App;
