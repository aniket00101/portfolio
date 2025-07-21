import React from 'react'

export const HeroGradient = () => {
  return (
    <div>
        <div className="shadow-cyanMediumShadow absolute top-0 right-[400px] animate-pulse"></div>

        <div className="shadow-orangeMediumShadow absolute top-0 right-0 animate-pulse"></div>

        <div className="shadow-cyanMediumShadow absolute top-[300px] left-0 opacity-80"></div>

        <div className="shadow-orangeMediumShadow absolute top-[500px] left-0 opacity-80 animate-pulse"></div>
    </div>
  )
}

// const HeroGradient = () => {
//   return (
//     <div>
//       <div className="  shadow-cyanMediumShadow absolute top-0 right-[400px] -z-10 animate-pulse"></div>
//       <div className="  shadow-cyanMediumShadow absolute top-[5%] left-0 -z-10 opacity-50"></div>
//       <div className="  shadow-orangeMediumShadow absolute top-0 right-0 -z-10 animate-pulse"></div>
//       <div className="  shadow-orangeMediumShadow absolute top-[10%] left-0 -z-10 opacity-50 "></div>
//     </div>
//   );
// };

// export default HeroGradient;