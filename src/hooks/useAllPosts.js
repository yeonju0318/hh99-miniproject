import { create } from 'zustand';

 const useAllPosts = create((set) =>({
  allPosts: [],
  setAllPosts: (payload) => set({allPosts: payload}),
 }))

 export default useAllPosts;