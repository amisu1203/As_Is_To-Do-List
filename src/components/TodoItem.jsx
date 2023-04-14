import React from "react";

function TodoItem({ todoItem, onRemove, getDone }) {
  // 삭제
  const handleRemove = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onRemove(todoItem.id);
      alert("삭제되었습니다!");
    } else return;
  };

  // 완료
  const handleDone = () => {
    window.confirm("정말 완료하셨나요?") && getDone(todoItem.id);
  };

  return (
    <article className="TodoItem box-same1">
      <h3>{todoItem.title}</h3>
      <p>{todoItem.content}</p>
      <div className="con-btns">
        <button className="btn-delete btn-original" onClick={handleRemove}>
          삭제
        </button>
        <button className="btn-original" onClick={handleDone}>
          완료
        </button>
      </div>
    </article>
  );
}

export default TodoItem;
