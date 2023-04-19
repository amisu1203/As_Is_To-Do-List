import React from "react";
import DoneItem from "./DoneItem";

function DoneList({ doneList, turnBack, onRemove }) {
  return (
    <div className="DoneList">
      {doneList.map((todo) => (
        <DoneItem key={todo.id} todoItem={todo} turnBack={turnBack} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default DoneList;
