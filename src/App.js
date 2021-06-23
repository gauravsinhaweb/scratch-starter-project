import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import Nav from "./components/Navbar";
import Menu from "./components/Menu";

export default function App() {
  const [action, setAction] = useState(null);
  return (
    <div className="bg-blue-100 font-sans">
      <Nav />
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Menu id="categories" />
          <Sidebar action={action} setAction={setAction} /> <MidArea />
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea action={action} />
        </div>
      </div>
    </div>
  );
}
