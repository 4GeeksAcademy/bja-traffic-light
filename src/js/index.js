// Import React and ReactDOM
import React from "react";
import ReactDOM from "react-dom";

// Include your styles into the webpack bundle
import "../styles/index.css";

// Import your own components
import Home from "./component/home.jsx";
import TrafficLight from "./component/newcodetraffic.jsx";


// Render your React application
ReactDOM.render(
  <div>
    <Home />
    <TrafficLight /> {/* Render TrafficLight component */}
  </div>,
  document.querySelector("#app")
);
