import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Location from "./components/Location";
import data from "./data";
import Bottom from "./components/Bottom";

function App() {
  const travels = data.map((travel) => <Location travel={travel} />);
  return (
    <div>
      <Navbar />
      {travels}
      <Bottom />
    </div>
  );
}

export default App;
