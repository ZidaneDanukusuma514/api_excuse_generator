import * as React from "react";

export interface IHeaderProps {
  title: string;
}

export default function Header(props: IHeaderProps) {
  return (
    <header className="py-4 bg-slate-200 border-b-2 border-slate-800">
      <h1 className="text-2xl text-black text-center font-mono font-bold">
        {props.title}
      </h1>
    </header>
  );
}
