import axios from "axios";
import Cookies from "js-cookie";
import React, { useCallback, useContext, useState } from "react";
import Heading from "../components/Heading";
import AuthContext from "../hooks/useCurrentUser";
import useLoginModal from "../hooks/useLoginModal";
import Modal from "./Modal";

function LoginModal() {
  const { setAuth } = useContext(AuthContext);
  const loginModal = useLoginModal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = {
    email: email,
    password: password,
  };

  // 로그인 api 통신
  const onSubmit = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/member/login`,
        user
      );

      console.log(JSON.stringify(response?.message));
      const accessHeader = response.headers.get("Access_Token");
      const accessToken = accessHeader.split(" ")[1];
      console.log(response.data);
      const roles = response?.data?.roles;
      Cookies.set("auth", accessToken);
      localStorage.setItem("user", JSON.stringify(response.data.data));
      setAuth(response.data.data);
      setEmail("");
      setPassword("");
      loginModal.onClose();
      window.location.replace("/");
      alert("로그인 성공!");
    } catch (err) {
      if (!err?.response) {
        console.log("에러메세지가 없습니다.");
      } else if (err.response?.status === 400) {
        console.log("아이디 또는 비밀번호를 확인해주세요!");
      } else if (err.response?.status === 401) {
        console.log("가입되지 않은 유저입니다.");
      }
    }
  };
  // 핸들러 부분

  const handleInputChange = useCallback(
    (e) => {
      switch (e.target.name) {
        case "email":
          setEmail(e.target.value);
          break;
        case "password":
          setPassword(e.target.value);
          break;
        default:
          break;
      }
    },
    [setEmail, setPassword]
  );

  // 모달 Body 부분에 들어갈 내용
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="로그인" subtitle="" />

      {/* Email INPUT */}
      <div className="w-full relative">
        <input
          onChange={handleInputChange}
          value={email}
          name="email"
          type="text"
          className="peer w-full p-4 pt-6 font-light bg0white border-2 rounded-md outline-none transition pl-4 "
        />
        <label
          className={`absolute text-md duration-150 transform -transform-y-3 top-5 z-10 origin-[0] left-4
        peer-focus:scale-75
        peer-focus:-translate-y-4
        ${email && "scale-75"}
        ${email && "-translate-y-4"}
        `}
        >
          이메일
        </label>
      </div>

      {/* Password INPUT */}
      <div className="w-full relative">
        <input
          onChange={handleInputChange}
          value={password}
          name="password"
          type="password"
          className="peer w-full p-4 pt-6 font-light bg0white border-2 rounded-md outline-none transition pl-4 "
        />
        <label
          className={`absolute text-md duration-150 transform -transform-y-3 top-5 z-10 origin-[0] left-4
        peer-focus:scale-75
        peer-focus:-translate-y-4
        ${password && "scale-75"}
        ${password && "-translate-y-4"}
        `}
        >
          비밀번호
        </label>
      </div>
    </div>
  );

  return (
    <>
      <Modal
        isOpen={loginModal.isOpen}
        title="로그인"
        actionLabel="로그인"
        onClose={loginModal.onClose}
        body={bodyContent}
        onSubmit={onSubmit}
      />
    </>
  );
}

export default LoginModal;
