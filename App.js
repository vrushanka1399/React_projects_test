import logo from './logo.svg';
import './App.css';
import InputList from "./InputList";
import React, { useState, createContext } from "react";
import AddList from "./AddList";
import SearchList from "./SearchList";

export const appContext=createContext();

function App() {
    const [enter,setEnter]=useState(false);
    const [list, setList]=useState([]);
    const [search, setSearch]=useState("");
    const [title, setTitle]=useState("");
    const [passwd, setPasswd]=useState("");
    const [editid, setEditid]=useState("");

    

    function addList(uname,upasswd){
        if(editid){
            setList(
                (prev)=>prev.map((item)=>{
                    if(item.id===editid){
                        return{
                            ...item, name:uname, passwd: upasswd
                        };
                    } else {
                        return item;
                    }
                })
            );
            setEditid("");
      } else{
          setList((prev)=>{
            return[...prev,{id: Math.random().toString(), name: uname, passwd: upasswd}];
        })};
    }
    

    function setToTrue(){
        setEnter(true);
    }
    function setToFalse(){
        setEnter(false);
    }
    function filterList(id){
        setList((elem)=>elem.filter((item)=>item.id!==id));
    }
    const searchList=list.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()));

    function editList(id){
        const listid=list.find((item)=>item.id==id);
        setTitle(listid.name);
        setPasswd(listid.passwd);
        setEditid(listid.id);
    }
    
  return (
    <div className="parent">
    <appContext.Provider value={{
        enter,
        list,
        search,
        title,
        passwd,
        editid,
        setEnter,
        setList,
        setSearch,
        setTitle,
        setPasswd,
        setEditid,

    addList,
    filterList,
    editList,
    searchList

    }}>
    {enter && <InputList />}
    <h1>Password Keeper</h1>
    <h3>Total Passwords: {searchList.length}</h3>
    <SearchList />
    <button type="button"  className="button3" onClick={setToTrue}>Add New Password</button>
    <AddList />
    </appContext.Provider>
    </div>
  );
}

export default App;
