import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [filters, setFilters] = useState("All")
  const [taskList, setTaskList] = useState(TASKS)


  const onTaskFormSubmit = (item) => {
  setTaskList([...taskList, item])
  }
    
  function handleDelete(name){
    const newList = taskList.filter((task) => task.text !== name);
    setTaskList(newList);
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories = {CATEGORIES} filters = {filters} setFilters = {setFilters} />
      <NewTaskForm onTaskFormSubmit = {onTaskFormSubmit} categories = {CATEGORIES}/>
      <TaskList tasks = {TASKS} taskList = {taskList} handleDelete = {handleDelete} filter = {filters} />
    </div>
  );
}

export default App;
