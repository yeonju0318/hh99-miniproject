import { create } from 'zustand';

 const useFeelTag = create((set) =>({
  feelTag: "",
  setFeelTag: (payload) => {
    console.log(payload)
    set({feelTag: payload})
  } ,
 }))

 export default useFeelTag;