import React from 'react'
import { PiHexagonThin } from "react-icons/pi"

export const HeroPic = () => {
  return (
    <div className="h-full flex items-center justify-center">
        <img src="../../public/images/myself/me.png" alt="Aniket Das" className="max-h-[450px] w-auto" />
        <div className="absolute -z-20 flex justify-center items-center animate-pulse">
            <PiHexagonThin className="h-[420px] w-[420px] text-cyan blur-md animate-[spin_20s_linear_infinite]" />
        </div>
    </div>
  )
}
