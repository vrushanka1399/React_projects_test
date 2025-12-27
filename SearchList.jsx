import React, { useState } from "react";
import Card from "./Card";
import "./SearchList.css"

function SearchList(props){
	
	return(
	<Card className="search1">
	<label htmlFor="search">Search text: </label>
	<input type="text" id="search" placeholder="Enter text to search..." value={props.search} onChange={(e)=>props.setSearch(e.target.value)}/>
	<div className="search-info">
	<div>Total Notes: {props.title.length}</div>
	<div>Showing: {props.items.length}</div>
	</div>
	</Card>
	)
}
export default SearchList;
