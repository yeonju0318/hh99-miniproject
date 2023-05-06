import React from "react";
import {Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Main from "../pages/Main";
import Question from "../pages/Question";

export const Router = () => {
  return (
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/question" element={<Question />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
  );
};

export default Router;
