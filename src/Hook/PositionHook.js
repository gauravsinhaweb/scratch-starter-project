import React, { useContext, createContext, useState } from "react";

const PostitonContext = createContext();

export const PositionHook = ({ children }) => {
  const [x, setX] = useState(200);
  const [y, setY] = useState(200);
  const [angle, setAngle] = useState("0");
  //   console.log(x, y, angle);

  return (
    <PostitonContext.Provider value={{ x, setX, y, setY, angle, setAngle }}>
      {children}
    </PostitonContext.Provider>
  );
};

export const usePosition = () => useContext(PostitonContext);
