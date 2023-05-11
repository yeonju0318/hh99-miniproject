import { create } from "zustand";

const useInput = create((set) => ({
  inputText: "",
  setInputText: (text) => set({ inputText: text }),
  clearInputText: () => set({ inputText: "" }),
}));

export default useInput;
