import React, {useState,useContext} from 'react';
import {db} from "../../utils/db"
import { v4 as uuidv4 } from 'uuid';
import DisplayTodo from './DisplayTodo'
import TodoForm from "./TodoForm"
import SearchComponent from "./SearchComponent"
import {TodoContext } from "../../Context/TodoContextProvider"
export default function Todo() {
  let {data,setData}=useContext(TodoContext)
  
  let [searchList,setSearchList]=useState([...data])
  const handleDelete=(id)=>{
    data=data?.filter((item)=>item.id!=id)
    setData([...data])
    setSearchList([...data])
  }
  const handleUpdateList = (val) => {
    val["status"] = false
    data=[...data, { ...val, id: uuidv4(), subTask: [] }]
    setData([...data]);
    
    setSearchList([...data])
}
const searchElementFunction=(val)=>{
  console.log(val)
let searchData=data?.filter(item=>item.name.toLowerCase().includes(val.toLowerCase()))
setSearchList([...searchData])
}

  return (
    <div>
  <SearchComponent onClick={searchElementFunction}/>
      
      <TodoForm handleUpdateList={handleUpdateList}/>
<DisplayTodo listData ={searchList} handleDeleteTask={handleDelete}/>
    </div>
  )
}
