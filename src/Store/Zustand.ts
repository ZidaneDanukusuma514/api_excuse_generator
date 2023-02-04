import axios from "axios";
import { create } from "zustand";
import { Storestate } from "./Interface";

export const useStore = create<Storestate>((set) => ({
  value: "This is zustand value",
  Data: [
    {
      id: 416,
      excuse: "There will be a zombie apocalypse tomorrow, I need to rest.",
      category: "party",
    },
  ],
  insertData: (parameter) => {
    set((state) => ({
      Data: [...state.Data, parameter],
    }));
  },

  getData: (mode) => {
    console.log(mode);

    axios
      .get(`https://excuser-three.vercel.app/v1/excuse/${mode}/`)
      .then((response) => {
        console.log(response.data);
      });
  },
}));
