import axios from "axios";
import { create } from "zustand";
import { Storestate } from "./Interface";

export const useStore = create<Storestate>((set) => ({
  value: "This is zustand value",
  Data: [
    {
      id: 416,
      excuse: "Excuse me........",
      category: "category",
    },
  ],
  insertData: (parameter) => {
    set((state) => ({
      Data: [...state.Data, parameter],
    }));
  },
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
        console.log(...response.data);

        set(() => ({
          Data: [...response.data],
        }));
      });
  },
}));
