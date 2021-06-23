import React from "react";

function Nav() {
  return (
    <div className="bg-blue-500 text-white py-3 px-3 font-bold">
      <a className="inline-block mx-2">
        <img src="/icons/scratch-icon.svg" height="100px" width="100px"></img>
      </a>

      <a href="#" className="mx-2 float-right my-2">
        Sign in
      </a>
      <a href="#" className="float-right mx-2 my-2">
        Join Scratch
      </a>
    </div>
  );
}

export default Nav;
