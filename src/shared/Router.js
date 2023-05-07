import React from "react";
import {Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Like from "../pages/Like";
import Main from "../pages/Main";
import Profile from "../pages/Profile";
import Question from "../pages/Question";

export const Router = () => {
  return (
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/question" element={<Question />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/like" element={<Like />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
  );
};

export default Router;
