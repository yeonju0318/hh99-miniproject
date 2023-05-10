import { create } from "zustand";

const useInput = create((set) => ({
  inputText: "",
  setInputText: (text) => set({ inputText: text }),
}));

export default useInput;
