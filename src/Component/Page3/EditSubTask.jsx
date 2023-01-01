import React, {useState}from "react";
import TodoForm from "../Page1/TodoForm"
import style from "../Page1/todolist.module.css"
export default function EditSubTask({ taskData,updataTask }) {
    const [data,setData]=useState(taskData)
  const handleAddSubTask = (value) => {
let obj={...value,status:false,id:data?.subTask?.length+1}
data.subTask.push({...obj})
updataTask(data)
  };
  const handleChange = (e, key,i) => {
    data.subTask[i]= {
      ...data.subTask[i],
      [key]:
        e.target.value === "true"
          ? true
          : e.target.value === "false"
          ? false
          : e.target.value,
    };
    
   setData({...data})
  };
  const handleUpdateSubTask=()=>{
    updataTask(data)
  }
  return (
    <div>
      <h2>Edit Sub Task</h2>
      <div>
        <div
          style={{ display: "flex", justifyContent: "center", gap: "0.5rem" }}
        >
          <h4>Title: {data?.name}</h4>
          <h4>Status: {data?.status ? "Completed" : "Pending"}</h4>
        </div>
      </div>
      
      <TodoForm msg={"Sub"} handleUpdateList={handleAddSubTask}/>
      <div className={style.displayTaskContainer} style={{marginTop:"1rem"}}>
        <div>
          <div>
            <b>title</b>
          </div>
          <div>
            <b> Status</b>
          </div>
          <div>
            <b> Desc</b>
          </div>
          <div>
            <b>Action</b>
          </div>
        </div>
        {data?.subTask?.map((item, i) => (
          <div key={i} >
            <div>
              <input
                type="text"
                value={item.name}
                onChange={(e) => handleChange(e, "name",i)}
              />
            </div>
            <div>
              <select
                onChange={(e) => handleChange(e, "status",i)}
                defaultValue={item.status}
              >
                <option value={true}>Completed</option>
                <option value={false}>Pending</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                value={item?.desc}
                onChange={(e) => handleChange(e, "desc",i)}
              />
            </div>
            <div>
              <button onClick={handleUpdateSubTask}>update SubTask</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
