import React, { useState } from "react";

function CategoryFilter({ categories, filters, setFilters }) {
  
  
  const handleToggle = (e) => {
    setFilters(e.target.value)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category)=>{
        return <button key = {category} onClick = {(e)=>{handleToggle(e)}} 
        value={category} className = {filters === category ? 'selected' : null} >{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;