import React from "react";
import DoneItem from "./DoneItem";

function DoneList({ doneList, turnBack }) {
  return (
    <div className="DoneList">
      {doneList.map((todo) => (
        <DoneItem key={todo.id} todoItem={todo} turnBack={turnBack} />
      ))}
    </div>
  );
}

export default DoneList;
