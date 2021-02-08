import React from "react";

function Character(props) {
	return (
		<div className="charCont">
			<div className="charCard">
				<div className="charName">
					<p>{props.name}</p>
				</div>
				<div className="charmImg">
					<img className="img" src={props.image} alt="" />
				</div>
				<div className="charSpec">
					<p>{props.species}</p>
				</div>
			</div>
		</div>
	);
}

export default Character;
