import Cookies from "js-cookie";
import { create } from "zustand";

const useIsLoggined = create((set) => ({
  IsLoggined: Cookies.get('auth')?.length > 0 ? true : false,
  onLogin: () => set({ IsLoggined: true }),
  onLogout: () => set({ IsLoggined: false }),
}));

export default useIsLoggined;
