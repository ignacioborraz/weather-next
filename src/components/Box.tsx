import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
  relative: boolean;
};

export default function Box({ title, children, relative }: Props) {
  return (
    <span
      className={`${
        relative && "relative"
      } w-[400px] h-[420px] text-slate-800 bg-slate-200 flex flex-col justify-between items-center p-2 rounded mb-[50px]`}
    >
      <h2
        className={`w-[350px] text-slate-800 font-dancing font-black text-center ${
          title.length < 15
            ? "text-[75px]"
            : title.length < 25
            ? "text-[40px]"
            : "text-[30px]"
        }`}
      >
        {title}
      </h2>
      {children}
    </span>
  );
}
