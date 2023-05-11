import { create } from 'zustand';

 const useGenreCategories = create((set) =>({
  genreCategories: null ,
  setGenreCategories: (payload) => set({genreCategories: payload}),
 }))

 export default useGenreCategories;