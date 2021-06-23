import React from "react";
import { usePosition } from "../Hook/PositionHook";
import Icon from "./Icon";

export default function Sidebar() {
  const { y, setY, x, setX, angle, setAngle } = usePosition();
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold"> {"Events"} </div>
      <div
        className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm"
        style={{ cursor: "grabbing" }}
      >
        {"When "}
        <Icon name="flag" size={15} className="text-green-600 mx-2" />
        {"clicked"}
      </div>
      <div
        className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm"
        style={{ cursor: "grabbing" }}
      >
        {"When this sprite clicked"}
      </div>
      <div className="font-bold"> {"Motion"} </div>
      <div
        onClick={() => setY(y - 10)}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm"
        style={{ cursor: "grabbing" }}
      >
        {"Move 10 steps Up"}
      </div>{" "}
      <div
        onClick={() => setY(y + 10)}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm"
        style={{ cursor: "grabbing" }}
      >
        {"Move 10 steps Down"}
      </div>{" "}
      <div
        onClick={() => setX(x + 10)}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm"
        style={{ cursor: "grabbing" }}
      >
        {"Move 10 steps Forward"}
      </div>
      <div
        onClick={() => setX(x - 10)}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm"
        style={{ cursor: "grabbing" }}
      >
        {"Move 10 steps Backward"}
      </div>
      <div
        onClick={() => {
          const theta = parseInt(angle);
          setAngle(`${theta + 15}`);
        }}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm"
        style={{ cursor: "grabbing" }}
      >
        {"Turn "}
        <Icon name="undo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div>
      <div
        onClick={() => {
          const theta = parseInt(angle);
          setAngle(`${theta - 15}`);
        }}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm"
        style={{ cursor: "grabbing" }}
      >
        {"Turn "}
        <Icon name="redo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div>
      <div
        onClick={() =>
          setX(Math.floor(Math.random() * 400) + 1) +
          setY(Math.floor(Math.random() * 400) + 1)
        }
        style={{ cursor: "grabbing" }}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm"
      >
        {"Random Position"}
      </div>{" "}
      {/* <div
        onClick={() =>
          setX(Math.floor(Math.random() * 400) + 1) +
          setY(Math.floor(Math.random() * 400) + 1)
        }
        style={{ cursor: "grabbing", animationDelay: "8000ms" }}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm"
      >
        {"Glide"}
      </div>{" "} */}
    </div>
  );
}
