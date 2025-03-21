import React from 'react'

function ShowToDoList({todo=[], onRemove}) {
  return (
    console.log(todo),
    <div>
      <ul>
      {todo.map((item, index) => (
        <li key={index}>
            {item}
            <button onClick={() => onRemove(index)}>Hapus</button>
        </li>
        ))}
        </ul>
    </div>
  )
}

export default ShowToDoList
