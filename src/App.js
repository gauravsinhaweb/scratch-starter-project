import React, { useState } from "react";
import Menu from "./components/Menu";
import MidArea from "./components/MidArea";
import Nav from "./components/Navbar";
import PreviewArea from "./components/PreviewArea";
import Sidebar from "./components/Sidebar";

export default function App() {
  const [vertical, setVertical] = useState(170);
  const [horizontal, setHorizontal] = useState(87);

  return (
    <div className="bg-blue-100 font-sans">
      <Nav />
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <div>
            {" "}
            <Menu id="categories" />
          </div>
          <Sidebar vertical={vertical} horizontal={horizontal} />{" "}
          <MidArea
            setVertical={setVertical}
            setHorizontal={setHorizontal}
            vertical={vertical}
            horizontal={horizontal}
          />
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea />
        </div>
      </div>
    </div>
  );
}
