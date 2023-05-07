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

  console.log(user)
  return (
    <>
      <div className="fixed-top w-full z-10 shadow-sm bg-rose-400">
        <div className="py-4 border-b-[1px]">
          <Container>
            <div className="flex flex-row items-center justify-between gap-3 md:gap-0 ">
              <Logo />
              <div className="ml-8 absolute inset-x-0 flex justify-center">
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
