import React from "react";

export default function Menu({ className, id }) {
  return (
    <div
      className={` w-30 flex flex-col overflow-y-auto flex flex-col items-start border-r border-gray-300 text-sm items-center${className}`}
      id={id}
    >
      <div className="w-20 text-center bg-gray-200 cursor-pointer">
        <svg height="50" width="50" className="mx-2">
          <circle cx="30" cy="30" r="15" fill="#F59E0B" />
        </svg>
        <label>Events</label>
      </div>

      <div className="w-20 text-center cursor-pointer">
        <svg height="50" width="50" className="mx-2">
          <circle cx="30" cy="30" r="15" fill="#3B82F6" />
        </svg>
        <label>Motion</label>
      </div>

      <div className="w-20 text-center cursor-pointer">
        <svg height="50" width="50" className="mx-2">
          <circle cx="30" cy="30" r="15" fill="#8B5CF6" />
        </svg>
        <label>Looks</label>
      </div>

      <div className="w-20 text-center cursor-pointer">
        <svg height="50" width="50" className="mx-2">
          <circle cx="30" cy="30" r="15" fill="#FCD34D" />
        </svg>
        <label>Controls</label>
      </div>
    </div>
  );
}
