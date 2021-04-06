import React, { useState } from "react";
import TodoList from "./components/TodoList";

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },

    {
      id: 2,
      title: "Sleep",
      status: "completed",
    },

    {
      id: 3,
      title: "Code",
      status: "new",
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setfilteredStatus] = useState("all");

  const handleTodoClick = (todo, index) => {
    const newTodoList = [...todoList];
    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === "new" ? "completed" : "new",
    };
    setTodoList(newTodoList);
  };

  const handleShowAllTask = () => {
    setfilteredStatus("all");
  };
  const handleShowCompletedTask = () => {
    setfilteredStatus("completed");
  };
  const handleShowNewTask = () => {
    setfilteredStatus("new");
  };
  const filterList = todoList.filter(
    (todo) => filteredStatus === "all" || filteredStatus === todo.status
  );

  // console.log(filterList);
  return (
    <div>
      <h1>Todo List</h1>

      <TodoList todoList={todoList} onTodoClick={handleTodoClick} />
      <div>
        <button onClick={handleShowAllTask}>Show All Task</button>
        <button onClick={handleShowCompletedTask}>Show Completed Task</button>
        <button onClick={handleShowNewTask}>Show New Task</button>
      </div>

      <div>
        <TodoList todoList={filterList} />
      </div>
    </div>
  );
}

export default TodoFeature;
