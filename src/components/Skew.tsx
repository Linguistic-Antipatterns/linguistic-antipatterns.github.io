import React from "react"
import { twMerge } from "tailwind-merge"


export const Skew = ({
  children,
  color = "red",
  className,
}: {
  children: React.ReactNode;
  color?: "red" | "white";
  className?: string;
}) => {
  const bg = color === "red" ? "bg-red-500" : "bg-white";
  const textColor = color === "red" ? "text-white" : "text-black";

  return (
    <div
      className={twMerge(
        `-skew-x-[10deg] px-[12px] py-[5px] ${textColor} ${bg}`,
        className
      )}
    >
      {children}
    </div>
  );
};

//Only to be used with Skew
export const Skewer: React.FC<{children: React.ReactNode, className?: string}> = ({children, className}) => {
    return (<div className={twMerge("inline-flex", className)}>
        {children}
    </div>)
}

export const SkewTwo = ({fst, snd, className}: {fst:string, snd:string, className?: string}) => {
    return (<Skewer ><Skew color ="white" className={twMerge("border-l-4 border-y-4 border-yellow-500 ", className)}>{fst}</Skew><Skew className={twMerge("border-r-4 border-y-4 border-yellow-500",className)}>{snd}</Skew></Skewer>)
}