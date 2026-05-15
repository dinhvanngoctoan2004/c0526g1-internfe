import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./componan/Header";
import Home from "./componan/Home";
import "bootstrap/dist/css/bootstrap.css";
import AddStudent from "./componan/AddStudent";
import UpdateStudent from "./componan/UpdateStudent";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/studen/add`} element={<AddStudent />} />
        <Route path={`/studen/update/:id`} element={<UpdateStudent />} />
      </Routes>
    </>
  );
}

export default App;
