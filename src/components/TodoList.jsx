import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todoList, onRemove, getDone }) {
  return (
    <div className="TodoList">
      {todoList.map((i) => {
        return <TodoItem todoItem={i} onRemove={onRemove} getDone={getDone} key={i.id} />;
      })}
    </div>
  );
}

export default TodoList;
