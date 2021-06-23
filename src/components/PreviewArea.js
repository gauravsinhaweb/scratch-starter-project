import React, { useState } from "react";
import CatSprite from "./CatSprite";
import "../styles/PreviewArea.css";
import { useDrag } from "react-use-gesture";

import { usePosition } from "../Hook/PositionHook";

export default function PreviewArea() {
  const { y, x, angle } = usePosition();
  const [dragPositioning, setDragPositioning] = useState({ v: 0, h: 0 });

  const dragHandler = useDrag((params) => {
    setDragPositioning({
      h: params.offset[0],
      v: params.offset[1],
    });
  });
  const yAxis = y + "px";
  const xAxis = x + "px";
  const theta = angle + "deg";

  const top = dragPositioning.v < -200 === false ? dragPositioning.v : -200;
  const left = dragPositioning.h < -208 === false ? dragPositioning.h : -208;

  return (
    <div className="flex-none h-full overflow-y-auto p-2">
      <div
        style={{
          position: "absolute",
          transform: `translate(${xAxis},${yAxis})`,
        }}
      >
        <div
          {...dragHandler()}
          style={{
            position: "relative",
            top: top,
            left: left,
            cursor: "grabbing",

            transform: `rotate(${theta})`,
          }}
        >
          {" "}
          <CatSprite />
        </div>
      </div>
    </div>
  );
}
