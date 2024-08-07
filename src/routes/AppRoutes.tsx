import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aula1 from "../pages/Aula1";
import Aula2 from "../pages/Aula2";
import About from "../pages/About";
import Login from "../pages/Login";
import App from "../App";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aula1" element={<Aula1 />} />
        <Route path="/aula2" element={<Aula2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
