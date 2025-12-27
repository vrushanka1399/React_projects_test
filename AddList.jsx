import React, { useState } from "react";
import Card from "./Card";
import "./AddList.css";

function AddList(props){
	const[title,setTitle]=useState("");
	const[desc,setDesc]=useState("");

	function addSubmitHandler(event){
		event.preventDefault();
		props.onadd(title,desc);
		setTitle("");
		setDesc("");
	}

	return(
		<Card className="parent1">
		<form onSubmit={addSubmitHandler}>
		<label htmlFor="title">Note Title: </label>
		<input type="text" id="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
		<label htmlFor="desc">Note Desc: </label>
		<textarea id="title" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
		<button type="submit" className="button">Add to Book</button>
		</form>
		</Card>
	)
}
export default AddList;