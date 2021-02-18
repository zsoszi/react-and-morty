import React, { useState } from "react";
import Location from "./location";
import { useLocations } from "../useFetch/useData";
import Page from "./page";

function Locations(props) {
	const [page, setPage] = useState(1);
	const location = useLocations(page);

	let listL = [];

	//console.log(location);

	if (location !== "Loading..." && location !== undefined) {
		listL = location.results.map((itemL) => (
			<Location
				key={itemL.id}
				name={itemL.name}
				type={itemL.type}
				dimension={itemL.dimension}
				created={itemL.created}
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
			<div className="locContainer">{listL}</div>;
			<button
				id="home"
				onClick={(event) => (window.location.href = "../App.js")}
			>
				Home
			</button>
			<Page
				gotoNextPage={page ? gotoNextPage : null}
				gotoPrevPage={page ? gotoPrevPage : null}
			/>
		</div>
	);
}

export default Locations;
