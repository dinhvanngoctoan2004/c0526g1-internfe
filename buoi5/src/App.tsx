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
import Footed from "./componan/Footed";
import "bootstrap/dist/js/bootstrap.js";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/studen/add`} element={<AddStudent />} />
        <Route path={`/studen/update/:id`} element={<UpdateStudent />} />
      </Routes>
      <Footed />
    </>
  );
}

export default App;
