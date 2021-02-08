import React from "react";

function Location(props) {
	return (
		<div className="locCard">
			<div className="locName">
				<p>{props.name}</p>
			</div>
			<div className="locType">
				<p>{props.type}</p>
			</div>
		</div>
	);
}

export default Location;
