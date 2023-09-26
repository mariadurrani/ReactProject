import "./App.css";
import { useState } from "react";
import { Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
