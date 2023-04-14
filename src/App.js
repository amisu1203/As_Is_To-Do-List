import React, { useState, useRef } from "react";
import "./App.css";
import CreateToDo from "components/CreateToDo";
import TodoList from "components/TodoList";
import Working from "components/Working";
import Done from "components/Done";
import DoneList from "components/DoneList";

function App() {
  const [data, setData] = useState([]);

  // todoId 생성
  let todoId = useRef(0);

  // todo 생성
  const onCreate = ({ title, content, isDone }) => {
    const newTodo = {
      title,
      content,
      isDone,
      id: parseInt(todoId.current),
    };
    todoId.current += 1;
    setData([...data, newTodo]);
  };

  // todo 삭제
  const onRemove = (targetId) => {
    const newTodo = data.filter((i) => i.id !== targetId);
    setData(newTodo);
  };

  // todo 완료
  const getDone = (id) => {
    const newData = data.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: true };
      }
      return todo;
    });
    setData(newData);
  };

  return (
    <div className="App">
      <h1>MY TO-DO</h1>
      <CreateToDo onCreate={onCreate} />
      <Working>
        <TodoList todoList={data} onRemove={onRemove} getDone={getDone} />
      </Working>
      <Done>
        <DoneList doneList={data} onRemove={onRemove} />
      </Done>
    </div>
  );
}

export default App;
