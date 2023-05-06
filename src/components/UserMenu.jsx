import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import useLoginModal from "../hooks/useLoginModal";
import useRegisterModal from "../hooks/useRegisterModal";

function UserMenu() {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        {/* Navbar 유저메뉴 */}
        <div
          onClick={() => {
            setIsOpen(true);
          }}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full"
        >
          유저아이디
        </div>
        <div
          onClick={toggleOpen}
          className=" p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            {/* 유저 프로필사진 들어가는 곳 */}
            <img
              className="rounded-full"
              height="30"
              width="30"
              alt="Avatar"
              src={process.env.PUBLIC_URL + "/imgs/placeholder.jpg"}
            />
          </div>
        </div>

        {/* Navbar 맨 왼쪽 버튼 눌렀을때 펼쳐지는 모달 */}
        {isOpen && (
          <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
            <div className="flex flex-col cursor-pointer">
              {/* 로그인 버튼 */}
              <div
                onClick={() => {
                  loginModal.onOpen();
                  setIsOpen(false);
                }}
                className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
              >
                로그인
              </div>

              {/* 회원가입 버튼 */}
              <div
                onClick={() => {
                  registerModal.onOpen();
                  setIsOpen(false);
                }}
                className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
              >
                회원가입
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserMenu;
