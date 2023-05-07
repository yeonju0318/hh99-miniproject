import { create } from "zustand";

const useLogginedUser = create((set) => ({
  logginedUser: {
    email: "",
    nickname:""
  },
  setLogginedUser: (payload) => {
    console.log(payload)
    set({ payload })
  } ,
}));

export default useLogginedUser;