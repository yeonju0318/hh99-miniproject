import { create } from "zustand";

const useGenreTag = create((set) => ({
  GenreTag: "", //초기값 설정
  setGenreTag: (payload) => {
    console.log(payload);
    set({ GenreTag: payload });
  },
}));

export default useGenreTag;
