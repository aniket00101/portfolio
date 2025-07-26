import React from 'react'

export const HeroGradient = () => {
  return (
    <div>
        <div className="shadow-cyanMediumShadow absolute top-0 right-[400px] animate-pulse"></div>

        <div className="shadow-orangeMediumShadow absolute top-[200px] right-0 animate-pulse"></div>

        <div className="shadow-cyanMediumShadow absolute top-[500px] right-0 animate-pulse"></div>

        <div className="shadow-cyanMediumShadow absolute top-[300px] left-0 opacity-80"></div>

        <div className="shadow-orangeMediumShadow absolute top-[500px] left-0 opacity-80 animate-pulse"></div>
    </div>
  )
}
