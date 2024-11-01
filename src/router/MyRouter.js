import React from "react";
import { Route, Routes } from "react-router-dom";
import List from "../components/List";
import Manage from "../components/Manage";

const MyRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/candidatos" element={<List />} />
      <Route path="/Manage" element={<Manage />} />
      <Route path="/*" element={<List />} />
    </Routes>
  );
};

export default MyRouter;
