import { create } from "zustand";

const useWeatherTag = create((set) => ({
  WeatherTag: "",
  setWeatherTag: (payload) => {
    console.log(payload);
    set({ WeatherTag: payload });
  },
}));

export default useWeatherTag;
