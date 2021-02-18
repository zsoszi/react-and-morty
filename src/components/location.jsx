import React, { useState } from "react";

function Location(props) {
	const [isVisibleL, setIsVisibleL] = useState(false);

	const locClickHandler = () => {
		setIsVisibleL((isVisibleL) => !isVisibleL);
	};

	return (
		<div
			className={isVisibleL ? "locVisible" : "locCard"}
			onClick={locClickHandler}
		>
			<div className="locName">
				<p>Name: {props.name}</p>
			</div>
			<div className="locType">
				<p>Type: {props.type}</p>
			</div>
			{isVisibleL && (
				<div>
					<p>Dimension: {props.dimension}</p>
				</div>
			)}
			{isVisibleL && (
				<div>
					<p>Location: {props.created}</p>
				</div>
			)}
		</div>
	);
}

export default Location;
