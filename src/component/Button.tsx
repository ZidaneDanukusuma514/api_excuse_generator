import * as React from "react";
import { useStore } from "../Store/Zustand";

export interface IButtonProps {
  text: string;
  category: string;
}

export default function Button(props: IButtonProps) {
  const buttonStyled =
    "text-sm md:text-md truncate p-4 bg-transparent capitalize hover:bg-slate-200 hover:text-black border-2 rounded-xl font-bold";
  const { getData } = useStore();

  return (
    <button onClick={() => getData(props.category)} className={buttonStyled}>
      {props.text}
    </button>
  );
}
