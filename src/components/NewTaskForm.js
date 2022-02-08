import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [myCat, setCat] = useState("")
  const [myText, setText] = useState("")

  const catHandler = (e)=>{
    setCat(e.target.value)
  }
  const textHandler = (e)=>{
    setText(e.target.value)
  }

  const myNewItem = {
    category : myCat,
    text : myText
  }

  return (
    <form className="new-task-form" onSubmit = {(e)=>{onTaskFormSubmit(myNewItem); e.preventDefault()}}>
      <label>
        Details
        <input type="text" name="text" onChange={textHandler}/>
      </label>
      <label>
        Category
        <select name="category" onChange={catHandler}>
          {/* render <option> elements for each category here */}
          {categories.map((cat)=>{
            return <option value = {cat} key = {cat}>{cat}</option>
          })}

        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
