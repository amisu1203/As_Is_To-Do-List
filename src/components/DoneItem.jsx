import React from "react";

const DoneItem = ({ todoItem, onRemove, turnBack }) => {
  // 삭제
  const handleRemove = () => {
    window.confirm("정말 삭제하시겠습니까?") && onRemove(todoItem.id);
    alert("삭제되었습니다!");
  };
  // 완료상태 취소
  const handleTurnBack = () => {
    turnBack(todoItem.id);
    alert("다시 할 일이 추가됐네요!");
  };

  return (
    <article className="DoneItem box-same1">
      <h2>{todoItem.title}</h2>
      <p>{todoItem.content}</p>
      <div className="con-btns">
        <button className="btn-delete btn-original" onClick={handleRemove}>
          삭제
        </button>
        <button className=" btn-original" onClick={handleTurnBack}>
          취소
        </button>
      </div>
    </article>
  );
};

export default DoneItem;
