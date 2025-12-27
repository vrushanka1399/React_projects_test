import React, {useContext} from "react";
import Card from "./Card";
import {appContext} from "./App";

function SearchList(){

const {search, setSearch}=useContext(appContext);
	return(
		<Card className="search1">
		<label htmlFor="search">Search: </label>
		<input type="text" id="search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
		</Card>

	)
}

export default SearchList;