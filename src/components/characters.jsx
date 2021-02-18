import React, { useState } from "react";
import Character from "./character";
import { useCharacters } from "../useFetch/useData";
import Page from "./page";

function Characters(props) {
	const [page, setPage] = useState(1);
	const character = useCharacters(page);

	let list = [];

	//console.log(character);

	if (character !== "Loading..." && character !== undefined) {
		list = character.results.map((item) => (
			<Character
				key={item.id}
				image={item.image}
				name={item.name}
				species={item.species}
				gender={item.gender}
				origin={item.origin.name}
				location={item.location.name}
			/>
		));
	}
	const gotoNextPage = () => {
		setPage(page + 1);
	};
	const gotoPrevPage = () => {
		setPage(page - 1);
	};

	return (
		<div>
			<div className="charContainer">{list}</div>
			<button
				id="home"
				onClick={(event) => (window.location.href = "../App.js")}
			>
				Home
			</button>

			<Page
				gotoNextPage={gotoNextPage}
				gotoPrevPage={page ? gotoPrevPage : null}
			/>
		</div>
	);
}

export default Characters;
