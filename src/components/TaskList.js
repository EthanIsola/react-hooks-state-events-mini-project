import React, { useState, useEffect } from "react";
import Task from "./Task";

function TaskList({ tasks, handleDelete, taskList, filter}) {

  let filteredTasks;
  if(filter === "All"){
    filteredTasks = taskList
  }
  else{
    filteredTasks = taskList.filter((task)=>{return task.category === filter})
  }

  let display;
  if(taskList != undefined){
    display = filteredTasks.map((task)=>{
      return <Task text = {task.text} category = {task.category} key = {task.text} handleDelete = {handleDelete}/>
    })
  }
  else{
    display = tasks.map((task)=>{
      return <Task text = {task.text} category = {task.category} key = {task.text} handleDelete = {handleDelete}/>
    })
  }



  return (
    <div className="tasks">
      {display}
  </div>
  );
}

export default TaskList;
