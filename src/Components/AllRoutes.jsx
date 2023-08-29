import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLanding from "../Pages/MainLanding";
import LandingPage from "../Pages/LandingPage";

const AllRoutes = () => {
  return (
    <>
      <Routes>

        <Route path="/" element={<LandingPage/>} />
        <Route path="/mainlanding" element={<MainLanding />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
