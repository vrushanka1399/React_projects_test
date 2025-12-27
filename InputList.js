import React, { useState, useContext } from "react";
import {appContext} from "./App.js";
import Card from "./Card";
import "./InputList.css";

function heuristicPasswordAI(password) {
  let score = 0;

  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 1) return "Weak";
  if (score === 2) return "Medium";
  return "Strong";
}

function InputList(){
	const {title, setTitle, passwd, setPasswd, addList,filterList, setEnter}=useContext(appContext);

	const strength = heuristicPasswordAI(passwd);

	function addFormHandler(event){
		event.preventDefault();
		addList(title,passwd);
		setTitle("");
		setPasswd("");
	}

	return(
		<div className="overlay">
		<Card>
		<form onSubmit={addFormHandler}>
		<label htmlFor="title">Title: </label>
		<input type="text" id="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
		<label htmlFor="passwd">Password: </label>
		<input type="password" id="passwd" value={passwd} onChange={(e)=>setPasswd(e.target.value)}/>
		{passwd.length > 0 && (
		  <p>
			<strong>AI Strength:</strong>{" "}
			<span
			  style={{
				fontWeight: "bold",
				color:
				  strength === "Strong"
					? "green"
					: strength === "Medium"
					? "orange"
					: "red"
			  }}
			>
			  {strength}
			</span>
		  </p>
		)}
		<div className="actions">
		<button type="submit" className="button1">Add</button>
		<button type="button" className="button2" onClick={()=>setEnter(false)}>X</button>
		</div>
		</form>
		</Card>
		</div>
	)
}

export default InputList;