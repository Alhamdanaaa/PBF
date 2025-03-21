import React, { useState } from "react";
import ShowToDoList from "./ShowToDoList";
import ToDoListForm from "./ToDoListForm";

function ToDoList() {
  const [todo, setTodo] = useState(['makan', 'tidur', 'belajar']); 
  function handleOnSubmit(newTask){
    setTodo([...todo, newTask]);
  }
  function handleRemoveTask(index) {
    const updatedTodo = todo.filter((_, i) => i !== index);
    setTodo(updatedTodo);
  }
  return (
    <div>
      <h2>To Do List</h2>
      <ToDoListForm onSubmit={handleOnSubmit} />
      <ShowToDoList todo={todo} onRemove={handleRemoveTask} /> 

    </div>
  );
}

export default ToDoList;
