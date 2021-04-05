import React from "react";


function TodoList(props) {
    const {todoList} = props;
    
  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;
