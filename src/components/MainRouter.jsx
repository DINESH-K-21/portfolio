import React from "react";
import HomePage from "../pages/HomePage";
import { Route } from "react-router-dom";
import Hero from "./Hero";
import Skills from "./Skills";
import Connect from "./Connect";
import Projects from "./Projects";

function MainRouter() {
  return (
    <>
      <Route path="/" element={<HomePage />}>
        <Route index element={<Hero />} />
        <Route path="skills" element={<Skills />} />
        <Route path="connect" element={<Connect />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </>
  );
}

export default MainRouter;
