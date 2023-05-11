import { create } from 'zustand';

 const useWeatherCategories = create((set) =>({
  weatherCategories: null ,
  setWeatherCategories: (payload) => set({weatherCategories: payload}),
 }))

 export default useWeatherCategories;