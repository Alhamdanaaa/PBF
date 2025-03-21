import React, { useState } from "react";

function ToDoListForm({ onSubmit }) {
  const [newTask, setNewTask] = useState("");
  function handleClick(e) {
    e.preventDefault();
    onSubmit(newTask);
  }
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        ></input>
        <button onClick={handleClick}>Tambah</button>
      </form>
    </div>
  );
}

export default ToDoListForm;
