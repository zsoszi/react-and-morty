import React from "react";
import Location from "./location";
import { useLocations } from "../useFetch/useData";

function Locations(props) {

    let pageNum = "";   

    const location = useLocations(pageNum);
    
    let listL = [];
    
    //console.log(location);

    if (location !== "Loading..." && location !== undefined) {
		listL = location.results.map((itemL) => (
			<Location key={itemL.id} name={itemL.name} type={itemL.type} />
		));
	}
	return <div className="locContainer">{listL}</div>;
}

export default Locations;
