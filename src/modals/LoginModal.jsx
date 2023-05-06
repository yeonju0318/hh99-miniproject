import React, { useState } from 'react'
import { useMutation } from 'react-query';
import { loginUser } from '../api/auth';
import Heading from '../components/Heading';
import useLoginModal from '../hooks/useLoginModal';
import Modal from './Modal';

function LoginModal() {
  const loginModal = useLoginModal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 유저 회원가입
  const mutationLogin = useMutation(loginUser, {
    onSuccess: () => {},
  });

  const user = {
    email: email,
    password: password,
  };

  const onSubmit = () => {
    mutationLogin.mutate(user);
    setEmail("");
    setPassword("");
    loginModal.onClose();
  };

  // 핸들러 부분
  const handleInputChange = (e) => {
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
  };

  // 모달 Body 부분에 들어갈 내용
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Login" subtitle="Login" />

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
        isOpen={loginModal.isOpen}
        title="Login"
        actionLabel="Login"
        onClose={loginModal.onClose}
        body={bodyContent}
        onSubmit={onSubmit}
      />
    </>
  );
}

export default LoginModal