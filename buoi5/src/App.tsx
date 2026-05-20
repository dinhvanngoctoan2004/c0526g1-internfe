import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Communal/Header";
import Home from "./page/communal/Home";
import "bootstrap/dist/css/bootstrap.css";
import AddStudent from "./component/manage/AddStudent";
import UpdateStudent from "./component/manage/UpdateStudent";
import Footed from "./component/Communal/Footed";
import "bootstrap/dist/js/bootstrap.js";
import { ToastContainer } from "react-toastify";
import Login from "./page/communal/Login";

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
        <Route path={`/login`} element={<Login />} />
      </Routes>
      <Footed />
    </>
  );
}

export default App;
