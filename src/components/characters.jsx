import React from "react";
import Character from "./character";
import { useCharacters } from "../useFetch/useData";

function Characters(props) {
	let pageNum = "";

	const character = useCharacters(pageNum);

	let list = [];

	//console.log(character);

	if (character !== "Loading..." && character !== undefined) {
		list = character.results.map((item) => (
			<Character
				key={item.id}
				image={item.image}
				name={item.name}
				species={item.species}
			/>
		));
	}

	return <div className="charContainer">{list}</div>;
}

export default Characters;
