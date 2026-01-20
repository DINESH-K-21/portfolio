import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function HomePage() {
  return (
    <div className="h-screen">
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default HomePage;
