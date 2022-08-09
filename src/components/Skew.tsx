import React from "react"
import { twMerge } from "tailwind-merge"

export const Skew = ({children, color = "red"}: {children:string, color?: "red" | "white"}) => {
      const bg = color === "red" ? "bg-red-500" : "bg-white"
      const textColor = color === "red" ? "text-white" : "text-black"
      return <div className={`-skew-x-[10deg] px-[12px] py-[5px] ${textColor} ${bg}`}>{children}</div>
}

//Only to be used with Skew
export const Skewer: React.FC<{children: React.ReactNode, className?: string}> = ({children, className}) => {
    return (<div className={twMerge("inline-flex", className)}>
        {children}
    </div>)
}

export const SkewTwo = ({fst, snd, className}: {fst:string, snd:string, className?: string}) => {
    return (<Skewer className={className}><Skew color ="white">{fst}</Skew><Skew>{snd}</Skew></Skewer>)
}