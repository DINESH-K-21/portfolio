import React from "react";
import MainRouter from "../components/MainRouter";
import { BrowserRouter, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {MainRouter()}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
