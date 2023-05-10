import { create } from "zustand";

const useAnswerGpt = create((set) => ({
  answer: "",
  setAnswerGpt: (payload) => {
    console.log(payload);
    set({ answer: payload });
  },
}));

export default useAnswerGpt;
