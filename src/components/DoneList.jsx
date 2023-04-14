import React from "react";
import DoneItem from "./DoneItem";

function DoneList({ doneList, onRemove }) {
  return (
    <div className="DoneList">
      {/* todo item 하나하나 보여주기 -> map */}
      {doneList.map((i) => {
        if (i.isDone === true) {
          return <DoneItem todoItem={i} key={i.id} onRemove={onRemove} />;
        }
      })}
    </div>
  );
}

export default DoneList;
