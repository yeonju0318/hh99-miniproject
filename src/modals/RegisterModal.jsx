import React, { useState } from "react";
import { useMutation } from "react-query";
import { addUser } from "../api/auth";
import Heading from "../components/Heading";
import useRegisterModal from "../hooks/useRegisterModal";
import Modal from "./Modal";

function RegisterModal() {
  const registerModal = useRegisterModal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  // 유저 회원가입
  const mutationSignUp = useMutation(addUser, {
    onSuccess: () => {},
  });

  const newUser = {
    email: email,
    nickname: nickname,
    password: password,
  };

  const onSubmit = () => {
    mutationSignUp.mutate(newUser);
    setEmail("");
    setPassword("");
    setNickname("");
    registerModal.onClose();
  };

  // 핸들러 부분
  const handleInputChange = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "nickname":
        setNickname(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  // 모달 Body 부분에 들어갈 내용
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Register" subtitle="Sign up!" />

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
          Email
        </label>
      </div>

      {/* Nickname INPUT */}
      <div className="w-full relative">
        <input
          onChange={handleInputChange}
          value={nickname}
          name="nickname"
          type="text"
          className="peer w-full p-4 pt-6 font-light bg0white border-2 rounded-md outline-none transition pl-4 "
        />
        <label
          className={`absolute text-md duration-150 transform -transform-y-3 top-5 z-10 origin-[0] left-4
        peer-focus:scale-75
        peer-focus:-translate-y-4
        ${nickname && "scale-75"}
        ${nickname && "-translate-y-4"}
        `}
        >
          nickname
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
          Password
        </label>
      </div>
    </div>
  );

  return (
    <>
      <Modal
        isOpen={registerModal.isOpen}
        title="Register"
        actionLabel="Sign Up"
        onClose={registerModal.onClose}
        body={bodyContent}
        onSubmit={onSubmit}
      />
    </>
  );
}

export default RegisterModal;
