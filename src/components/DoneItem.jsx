import React from "react";

const DoneItem = ({ todoItem, onRemove }) => {
  // 삭제
  const handleRemove = () => {
    window.confirm("정말 삭제하시겠습니까?") && onRemove(todoItem.id);
    alert("삭제되었습니다!");
  };

  return (
    <article className="DoneItem box-same1">
      <h4>{todoItem.title}</h4>
      <p>{todoItem.content}</p>
      <div>
        <button className="btn-delete btn-original" onClick={handleRemove}>
          삭제
        </button>
      </div>
    </article>
  );
};

export default DoneItem;
