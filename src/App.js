import React from "react";
import "./styles.css";
import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa";
import { MdAlarm } from "react-icons/md";

export default function App() {
  return (
    <IconContext.Provider value={{ color: "blue", size: "5rem" }}>
      <div className="App">
        <h1>Learning...</h1>
        <h2>Below are some icons form react-icons packaage</h2>
        <FaReact />
        <MdAlarm />
      </div>
    </IconContext.Provider>
  );
}
