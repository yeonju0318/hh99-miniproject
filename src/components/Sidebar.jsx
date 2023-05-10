import Cookies from "js-cookie";
import React from "react";
import { toast } from "react-hot-toast";
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
      className="flex flex-row justify-start items-center my-8 text-1xl font-medium text-black hover:text-cyan-400"
    >
      <icon className="w-6 h-6 mr-2" />
      홈으로
    </NavLink>
    <NavLink
      to="/question"
      className="flex flex-row justify-start items-center my-8 text-1xl font-medium  text-black hover:text-cyan-400"
    >
      <icon className="w-6 h-6 mr-2" />
      질문하러 가기
    </NavLink>
    <NavLink
      to="/like"
      onClick={(e) => {
        const user = localStorage.getItem("user");
        const authCookie = Cookies.get("auth");

        console.log(user);
        console.log(!authCookie);

        if (user && !authCookie) {
          e.preventDefault();
          localStorage.removeItem("user");
          window.location.replace("/");
          return toast.error("세션이 만료되었습니다. 다시 로그인해주세요!");
        }
        if (Cookies.get("auth") === undefined) {
          e.preventDefault();
          localStorage.removeItem("user");
          window.location.replace("/");
          return toast.error("로그인이 필요한 기능입니다!");
        }
      }}
      className="flex flex-row justify-start items-center my-8 text-1xl font-medium  text-black hover:text-cyan-400"
    >
      <icon className="w-6 h-6 mr-2" />
      좋아요 목록
    </NavLink>
  </div>
);
export default Sidebar;
