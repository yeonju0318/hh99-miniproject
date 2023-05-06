import React from "react";
import Categories from "./Categories";
import Container from "./Container";
import Logo from "./Logo";
import NavMain from "./NavMain";
import UserMenu from "./UserMenu";

function Navbar() {
  return (
    <>
      <div className="fixed-top w-full z-10 shadow-sm bg-white">
        <div className="py-4 border-b-[1px]">
          <Container>
            <div className="flex flex-row items-center justify-between gap-3 md:gap-0 ">
              <Logo />
              <NavMain />
              <UserMenu />
            </div>
          </Container>
        </div>
        <Categories />
      </div>
    </>
  );
}

export default Navbar;
