import axios from "axios";
import { create } from "zustand";
import { Storestate } from "./Interface";

export const useStore = create<Storestate>((set) => ({
  value: "This is zustand value",

  Category: [
    { mode: "family" },
    { mode: "office" },
    { mode: "children" },
    { mode: "college" },
    { mode: "party" },
    { mode: "funny" },
    { mode: "unbelievable" },
    { mode: "developers" },
    { mode: "gaming" },
  ],

  getData: (mode) => {
    axios
      .get(`https://excuser-three.vercel.app/v1/excuse/${mode}/`)
      .then((response) => {
        const result = response.data;

        set(() => ({
          Data: result[0],
        }));
      });
  },
}));
