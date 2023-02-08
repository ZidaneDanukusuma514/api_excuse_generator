import * as React from "react";
import { Mode } from "../Store/Interface";
import { useStore } from "../Store/Zustand";
import Button from "./Button";
import Style from "./Home.module.css";
export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  const { getData, Data, Category } = useStore();

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
            {!Data ? "Answear here...." : Data.excuse}
          </p>
          <p className=" text-black/75 text-xs lg:text-lg font-semibold">
            {!Data ? "Category" : Data.category}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
          {Category.map((item, index) => (
            <Button key={index} text={item.mode} category={item.mode} />
          ))}
        </div>
      </div>
    </div>
  );
}
