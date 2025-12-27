import React from "react";
import Card from "./Card";
import "./ListAdd.css";

function ListAdd(props){
	return(
		<Card className="parent1">
		{props.lists.map((item)=>{
			return(
			<div>
			<div className="title">{item.name}</div>
			<div className="title">{item.desc}</div>
			<button type="button" onClick={()=>props.ondelete(item.id)}className="button1">Delete</button>
			<br></br>
			</div>
			)})}
		</Card>
	)
}
export default ListAdd;