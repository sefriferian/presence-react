import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Presence from "./Molecule/Presence";
import Home from "./Molecule/Home";
import Navigation from "./Navigation";

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route exact path="/presence" element={<Presence />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>;
