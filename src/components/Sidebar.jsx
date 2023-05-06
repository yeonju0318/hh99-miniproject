import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="md:flex hidden flex-col w-[170px] py-10 px-4 ">
        <NavLinks />
      </div>
    </>
  );
}

const NavLinks = () => (
  <div className="mt-12">
    <NavLink
    to="/"
    className="flex flex-row justify-start items-center my-8 text-1xl font-medium text-black hover:text-cyan-400">
      <icon className="w-6 h-6 mr-2"/>
      홈으로
    </NavLink>
    <NavLink
    to="/question"
    className="flex flex-row justify-start items-center my-8 text-1xl font-medium  text-black hover:text-cyan-400">
      <icon className="w-6 h-6 mr-2"/>
      질문하러 가기
    </NavLink>
    <NavLink
    to="/"
    className="flex flex-row justify-start items-center my-8 text-1xl font-medium  text-black hover:text-cyan-400">
      <icon className="w-6 h-6 mr-2"/>
      찜목록
    </NavLink>
  </div>
);
export default Sidebar;
