import React, { useContext, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { TodoContext } from "../../Context/TodoContextProvider";
import EditSubTask from "../Page3/EditSubTask"
export default function EditTask({}) {
  const history = useHistory();
  let { taskId } = useParams();
  let { data, setData } = useContext(TodoContext);
  const [editSubTask,setEditSubTask]=useState(false)
  const [renderedData, setRenderedData] = useState(
    data?.filter((item) => item.id == taskId)
  );

  const handleChange = (e, key) => {
    renderedData[0] = {
      ...renderedData[0],
      [key]:
        e.target.value === "true"
          ? true
          : e.target.value === "false"
          ? false
          : e.target.value,
    };
    setRenderedData([...renderedData]);
  };

  const handleSubmit = () => {
    let index = data.findIndex((item) => item.id === renderedData[0].id);

    if (index > -1) {
      data[index] = { ...renderedData[0] };
      setData([...data]);
      history.push("/");
    }
  };
const handleEditSubTask=()=>{
    setEditSubTask(true)
}
const updataTask=()=>{
    let index = data.findIndex((item) => item.id === renderedData[0].id);

    if (index > -1) {
      data[index] = { ...renderedData[0] };
      setData([...data]);
      
    }
}
  return (
    !editSubTask?<div>
      {renderedData?.length > 0 ? (
        renderedData?.map((item, key) => (
          <div key={key} style={{ display: "flex", gap: "1rem",justifyContent:"center",marginTop:"1rem" }}>
            <div>{item?.name ?? ""}</div>
            <div>
              <select
                onChange={(e) => handleChange(e, "status")}
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
                onChange={(e) => handleChange(e, "desc")}
              />
            </div>
            <div>
              <button onClick={handleEditSubTask}> Edit SubTask</button>
            </div>
            <div>
              <button onClick={handleSubmit}>update</button>
            </div>
          </div>
        ))
      ) : (
        <h1>Invalid task</h1>
      )}
      
    </div>:<EditSubTask taskData={renderedData[0]} setData={setRenderedData} updataTask={updataTask}/>
  );
}
