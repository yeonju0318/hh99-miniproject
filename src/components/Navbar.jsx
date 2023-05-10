import React from "react";
import useLogginedUser from "../hooks/useLogginedUser";
import Categories from "./Categories";
import Container from "./Container";
import Logo from "./Logo";
import NavMain from "./NavMain";
import UserMenu from "./UserMenu";

function Navbar() {
  const logginedUser = useLogginedUser()
  const user = logginedUser.logginedUser
  return (
    <>
      <div className="fixed-top w-full z-10  bg-rose-400">
        <div className="py-4 ">
          <Container>
            <div className="flex flex-row items-center justify-between gap-3 md:gap-0 ">
              <Logo />
              <div className="ml-4 absolute inset-x-0 flex justify-center">
                <NavMain />
              </div>
              <UserMenu user={user} />
            </div>
          </Container>
        </div>
        <Categories />
      </div>
    </>
  );
}

export default Navbar;
