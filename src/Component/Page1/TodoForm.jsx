import React, { useState } from 'react'
import styles from "./todolist.module.css"
export default function TodoForm({handleUpdateList,msg}) {
    const [state,setState]=useState({name:"",desc:""})
    const handleChange=(keys,value)=>{
        setState({...state,[keys]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        for(let keys in state){

            if(!state[keys]?.trim())
            return
        }
        if(typeof handleUpdateList==="function")
        {
            handleUpdateList(state)
            setState({name:"",desc:""})
        }
    }
  return (
    <div className={styles.container}>
        <h2>
            Add {msg??""}Task
        </h2>
      <form onSubmit={handleSubmit}>
        <div>
            <input type="text" placeholder="Enter Title" value={state?.name||""} onChange={(e)=>handleChange("name",e.target.value)}/>
        </div>
        <div>
            <input type="text" placeholder="Enter Description" value={state?.desc||""} onChange={(e)=>handleChange("desc",e.target.value)}/>
        </div>
        <div>
            <input type="submit" value="Add"/>
        </div>
      </form>
    </div>
  )
}