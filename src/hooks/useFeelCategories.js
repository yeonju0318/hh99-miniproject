import { create } from 'zustand';

 const useFeelCategories = create((set) =>({
  feelCategories: null ,
  setFeelCategories: (payload) => set({feelCategories: payload}),
 }))

 export default useFeelCategories;