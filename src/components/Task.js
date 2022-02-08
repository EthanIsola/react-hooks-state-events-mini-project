import React from "react";

function Task({text, handleDelete, category}) {
  return (
    <div className="task" >
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick = {()=>handleDelete(text)} >X</button>
    </div>
  );
}

export default Task;
