import logo from './logo.svg';
import './App.css';
import AddList from "./AddList";
import React, { useState } from "react";
import ListAdd from "./ListAdd";
import SearchList from "./SearchList"; 

function App() {
    const [list,setList]=useState([]);
    const [search,setSearch]=useState("");
     function addtoList(uname,udesc){
      setList((prev)=>[...prev,{id:Math.random().toString(), name: uname, desc:udesc}]);
      }
      function deleteList(id){
          setList((prev)=>prev.filter((item)=>item.id!==id));
      }
      const listitems=list.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()));
    return(
    <div className="parent">
    <h1>NoteBook App</h1>
    <SearchList search={search} setSearch={setSearch} title={list} items={listitems}/>
    <AddList onadd={addtoList}/>
    <ListAdd lists={listitems} ondelete={deleteList}/>
    </div>
  )
}

export default App;
