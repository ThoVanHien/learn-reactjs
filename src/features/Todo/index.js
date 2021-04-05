import React from "react";
import TodoList from "./components/TodoList";

function TodoFeature(props) {
  const todoList = [
    {
      id: 1,
      title: "Eat",
    },

    {
      id: 2,
      title: "Sleep",
    },

    {
      id: 3,
      title: "Code",
    },
  ];
  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default TodoFeature;
