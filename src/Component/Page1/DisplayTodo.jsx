import React, { useRef,useState } from "react";
import styles from "./todolist.module.css";
import {useHistory} from "react-router-dom"
export default function DisplayList({ listData, handleDeleteTask }) {
  let [undoList, setUndoList] = useState([]);
  let history = useHistory();
  const ref = useRef([]);
  const handleDelete = (e, id) => {
    clearTimeout(ref.current[id])
    e.stopPropagation();
    undoList.push(id);
    setUndoList([...undoList]);
    ref.current[id] = setTimeout(() => {
  
         handleDeleteTask(id);
    
    }, 10000);
  };
  const handleNewPage = (id) => {
    history.push('/'+id)
  };
  const handleUndoItem = (e, id) => {
    clearTimeout(ref.current[id])
    e.stopPropagation();
    undoList = undoList?.filter((item) => item!= id);
    setUndoList([...undoList]);

  };
  return (
    <div className={styles.container}>
      <h2>Display List</h2>
      <div className={styles.displayTaskContainer}>
        <div className={styles.rowHead}>
          <div>Title</div>
          <div>Description</div>
          <div>Sub Task</div>
          <div>Status</div>
          <div>Action</div>
        </div>
        {listData?.map((item, i) => (
          <div key={i} onClick={()=>handleNewPage(item.id)} style={{cursor:"pointer","&:hover":{background:"red"}}}>
            <div>{item.name}</div>
            <div>{item.desc}</div>
            <div>{
              item?.subTask?.map((subTask,key)=><ul key={key}><li>{subTask?.name}</li></ul>)
              
              }</div>
            <div>{item.status ? "Completed" : "Pending"}</div>
            {undoList?.includes(item?.id) ? (
              <div>
                {" "}
                <button onClick={(e) => handleUndoItem(e, item.id)}>Undo</button>
              </div>
            ) : (
              <div>
                {" "}
                <button onClick={(e) => handleDelete(e, item.id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
