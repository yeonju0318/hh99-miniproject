import Cookies from "js-cookie";
import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="md:flex hidden flex-col w-[176px] py-10 px-4 ">
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
    to="/like"
    onClick={(e)=> {
      if(Cookies.get("auth") === undefined ) {
        e.preventDefault()
        return alert('로그인이 필요한 기능입니다!')
      }
    }}
    className="flex flex-row justify-start items-center my-8 text-1xl font-medium  text-black hover:text-cyan-400">
      <icon className="w-6 h-6 mr-2"/>
      좋아요 목록
    </NavLink>
  </div>
);
export default Sidebar;
