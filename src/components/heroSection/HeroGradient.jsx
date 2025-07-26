import React from 'react'

export const HeroGradient = () => {
  return (
    <div>
        <div className="shadow-cyanMediumShadow absolute top-[300px] right-0 animate-pulse opacity-65"></div>

        <div className="shadow-cyanMediumShadow absolute top-[700px] right-0 animate-pulse opacity-65"></div>

        <div className="shadow-cyanMediumShadow absolute top-0 left-0 opacity-65"></div>

        <div className="shadow-cyanMediumShadow absolute top-[300px] left-0 opacity-65 animate-pulse"></div>
    </div>
  )
}
