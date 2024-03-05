//imported from gpt code 


import React, { useState } from 'react';

const TrafficLight = () => {
  const [color, setColor] = useState("red");

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className="traffic-light">
      <div
        className={`light red ${color === "red" ? "glow" : ""}`}
        onClick={() => changeColor("red")}
      />
      <div
        className={`light yellow ${color === "yellow" ? "glow" : ""}`}
        onClick={() => changeColor("yellow")}
      />
      <div
        className={`light green ${color === "green" ? "glow" : ""}`}
        onClick={() => changeColor("green")}
      />
      <button onClick={() => changeColor("purple")}>Add Purple</button>
    </div>
  );
};

export default TrafficLight;
