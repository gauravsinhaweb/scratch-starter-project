import React from "react";

export default function MidArea(props) {
  const { setVertical, setHorizontal } = props;

  function DragoverHandler(e) {
    e.preventDefault();
  }

  function dropHandler(e) {
    const [offsetX, offsetY] = e.dataTransfer.getData("text/html").split(",");
    setVertical(e.clientY + parseInt(offsetY, 10));
    setHorizontal(e.clientX + parseInt(offsetX, 10));
  }
  return (
    <div
      className="m-2"
      onDragOver={DragoverHandler}
      onDrop={dropHandler}
      style={{
        height: "100%",
        width: "100%",
      }}
    ></div>
  );
}
