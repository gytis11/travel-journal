import React from "react";
import "../index.css";
import { BiWorld } from "react-icons/bi";

export default function Navbar() {
  return (
    <nav>
      <BiWorld className="nav--icon" />
      <div className="nav--text"> my travel journal.</div>
    </nav>
  );
}
