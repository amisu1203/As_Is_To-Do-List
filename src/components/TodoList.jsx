import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todoList, onRemove, getDone }) {
  return (
    <div className="TodoList">
      {/* todo item 하나하나 보여주기 -> map */}
      {todoList.map((i) => {
        if (i.isDone === false) {
          return <TodoItem todoItem={i} key={i.id} onRemove={onRemove} getDone={getDone} />;
        }
      })}
    </div>
  );
}

export default TodoList;
