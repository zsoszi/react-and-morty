import React from "react";

function Page({ gotoNextPage, gotoPrevPage }) {
	return (
		<div id="page">
			{gotoPrevPage && (
				<button id="prev" onClick={gotoPrevPage}>
					Prev
				</button>
			)}
			{gotoNextPage && (
				<button id="next" onClick={gotoNextPage}>
					Next
				</button>
			)}
		</div>
	);
}

export default Page;
