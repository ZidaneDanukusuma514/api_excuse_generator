import * as React from "react";
import { Mode } from "../Store/Interface";
import { useStore } from "../Store/Zustand";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  const { getData } = useStore();
  const buttonStyled =
    "flex-1/4 p-4 bg-transparent capitalize hover:bg-slate-200 hover:text-black border-2 rounded-xl font-bold";
  return (
    <div className="w-[50%] mx-auto">
      <div className="">
        <h1 className="text-center font-bold font-mono">Home of course</h1>
        <div className="flex flex-row flex-wrap justify-center space-x-4">
          <button className={buttonStyled} onClick={() => getData(Mode.family)}>
            Family
          </button>
          <button
            className={buttonStyled}
            onClick={() => getData(Mode.children)}
          >
            children
          </button>
          <button
            className={buttonStyled}
            onClick={() => getData(Mode.college)}
          >
            college
          </button>
          <button
            className={buttonStyled}
            onClick={() => getData(Mode.developers)}
          >
            developers
          </button>
        </div>
      </div>
    </div>
  );
}
