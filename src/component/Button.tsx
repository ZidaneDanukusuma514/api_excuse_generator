import * as React from "react";
import { useStore } from "../Store/Zustand";
import Style from "./Home.module.css";
export interface IButtonProps {
  text: string;
  category: string;
}

export default function Button(props: IButtonProps) {
  const buttonStyled =
    " text-sm md:text-md truncate p-4 bg-transparent capitalize hover:bg-slate-200 hover:text-white border-2 rounded-xl font-bold";
  const { getData } = useStore();

  return (
    <button
      onClick={() => getData(props.category)}
      className={`${buttonStyled} ${Style["background-rainbow"]}`}
    >
      {props.text}
    </button>
  );
}
