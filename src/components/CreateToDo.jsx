import React, { useState, useRef } from "react";
import "../App.css";

const CreateToDo = ({ onCreate }) => {
  const [todos, setTodos] = useState({ title: "", content: "", isDone: false, id: "" });

  // input의 ref 생성
  const titleInput = useRef();
  const contentInput = useRef();

  // 제목과 내용을 입력할 때
  const handleChangeState = (e) => {
    setTodos({ ...todos, [e.target.name]: e.target.value });
  };

  // 추가하기 버튼을 눌렀을 때
  const handleAddTodo = () => {
    if (todos.title.length < 2) {
      titleInput.current.focus();
      return;
    }
    if (todos.content.length < 2) {
      contentInput.current.focus();
      return;
    }
    onCreate(todos);
    setTodos({ title: "", content: "", isDone: false });
    alert("해야 할 일이 생겼어요!");
  };

  return (
    <div className="CreateToDo">
      <header className="con-inp clearfix">
        제목
        <input ref={titleInput} type="text" name="title" value={todos.title} onChange={handleChangeState} placeholder="제목을 만들어주세요." size={30}></input>
        내용
        <input
          ref={contentInput}
          type="text"
          name="content"
          value={todos.content}
          onChange={handleChangeState}
          placeholder="할 일을 입력해주세요"
          size={30}
        ></input>
        <button className="btn-add btn-original" onClick={handleAddTodo}>
          추가하기
        </button>
      </header>
    </div>
  );
};

export default CreateToDo;
