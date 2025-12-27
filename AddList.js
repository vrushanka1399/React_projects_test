import React, {useContext} from "react";
import Card from "./Card";
import { appContext } from "./App";

function AddList(){
	const {searchList,filterList,editList}=	useContext(appContext);

	return(
	<div>
	<h2>Passwords List</h2>
	
	{searchList.map((item)=>{
		return(
			<Card>
			<div className="password">
			<div>{`${item.name}-${item.passwd}`}</div>
			<button type="button" className="button4" onClick={()=>filterList(item.id)}>Delete</button>
			<button type="button"  className="button5"onClick={()=>editList(item.id)}>Edit</button>
			</div>
			</Card>
		);
	})}
	</div>

);
}

export default AddList;
