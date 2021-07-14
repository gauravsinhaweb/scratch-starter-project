import React, { useState } from "react";
import { usePosition } from "../Hook/PositionHook";
import CatSprite from "./CatSprite";
function Preview() {
  const { y, x, angle } = usePosition();

  const [yAxis, setYAxis] = useState(0);
  const [xAxis, setXAxis] = useState(0);

  // here (v,h) is vertical and horizontal positioning

  const h = y;
  const v = x;
  const theta = angle + "deg";

  function DragstartHandler(e) {
    const offsetX = xAxis - e.clientX;
    const offsetY = yAxis - e.clientY;
    e.dataTransfer.setData("text/html", `${offsetX},${offsetY}`);
  }

  function DragoverHandler(e) {
    e.preventDefault();
  }

  function dropHandler(e) {
    const [offsetX, offsetY] = e.dataTransfer.getData("text/html").split(",");
    setYAxis(e.clientY + parseInt(offsetY, 10));
    setXAxis(e.clientX + parseInt(offsetX, 10));
  }

  return (
    <>
      <div
        className="absolute flex-none h-full w-1/3 overflow-y-auto p-2"
        onDragOver={DragoverHandler}
        onDrop={dropHandler}
      >
        <div
          style={{
            position: "absolute",
            left: `${xAxis + "px"}`,
            top: `${yAxis + "px"}`,
            transform: `translate(${v + "px"},${h + "px"})`,
          }}
        >
          <div
            draggable="true"
            onDragStart={DragstartHandler}
            style={{
              position: "relative",

              transform: `rotate(${theta})`,
              cursor: "grabbing",
            }}
          >
            {" "}
            <CatSprite />
          </div>
        </div>
      </div>
    </>
  );
}

export default Preview;
