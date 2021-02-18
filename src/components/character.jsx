import React, { useState } from "react";

function Character(props) {
	const [isVisible, setIsVisible] = useState(false);

	const charClickHandler = () => {
		setIsVisible((isVisible) => !isVisible);
	};

	return (
		<div
			className={isVisible ? "charVisible" : "charCard"}
			onClick={charClickHandler}
		>
			<div className="charName">
				<p>{props.name}</p>
			</div>
			<div className="charmImg">
				<img className="img" src={props.image} alt="" />
			</div>
			<div className="charSpec">
				<p>{props.species}</p>
			</div>
			{isVisible && (
				<div>
					<p>Gender: {props.gender}</p>
				</div>
			)}
			{isVisible && (
				<div>
					<p>Origin name: {props.origin}</p>
				</div>
			)}
			{isVisible && (
				<div>
					<p>Location: {props.location}</p>
				</div>
			)}
		</div>
	);
}

export default Character;
