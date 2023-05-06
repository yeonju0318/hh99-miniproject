import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-black ">
        <NavLinks />
      </div>
    </>
  );
}

const NavLinks = () => (
  <div className="mt-10">
    <NavLink
    to="/"
    className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400">
      <icon className="w-6 h-6 mr-2"/>
      버튼목록
    </NavLink>
  </div>
);
export default Sidebar;
