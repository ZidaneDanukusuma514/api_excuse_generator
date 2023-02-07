import * as React from "react";
import { Mode } from "../Store/Interface";
import { useStore } from "../Store/Zustand";
import Style from "./Home.module.css";
export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  const { getData, Data, Category } = useStore();
  const buttonStyled =
    "text-sm md:text-md truncate p-4 bg-transparent capitalize hover:bg-slate-200 hover:text-black border-2 rounded-xl font-bold";
  return (
    <div className="w-[50%] mx-auto">
      <div className="flex flex-col space-y-8 mt-8">
        <h1 className="text-lg text-center font-bold font-mono">
          Home of course
        </h1>
        <div
          className={`${Style.borderrainbow} flex space-x-2 items-center bg-slate-200 border-2 rounded-md p-4`}
        >
          <p className="grow border-r-4 border-slate-800/75  text-black text-sm lg:text-lg font-semibold">
            {Data[0].excuse}
          </p>
          <p className=" text-black/75 text-xs lg:text-lg font-semibold">
            {Data[0].category}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
          <button className={buttonStyled} onClick={() => getData(Mode.family)}>
            Family
          </button>

          <button className={buttonStyled} onClick={() => getData(Mode.office)}>
            Office
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
          <button className={buttonStyled} onClick={() => getData(Mode.party)}>
            party
          </button>
          <button className={buttonStyled} onClick={() => getData(Mode.funny)}>
            funny
          </button>

          <button
            className={buttonStyled}
            onClick={() => getData(Mode.unbelievable)}
          >
            unbeliveble
          </button>

          <button
            className={buttonStyled}
            onClick={() => getData(Mode.developers)}
          >
            developers
          </button>
          <button className={buttonStyled} onClick={() => getData(Mode.gaming)}>
            gaming
          </button>
        </div>
      </div>
    </div>
  );
}
