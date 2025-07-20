import React from 'react'
import { AboutMeText } from './AboutMeText'
import { AboutMeImage } from './AboutMeImage'

export const AboutMeMain = () => {
  return (
    <div className="flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center">
        <div>
            <AboutMeText />
        </div>
        <div >
            <AboutMeImage className="md:mr-5"/>
        </div>
        
        
    </div>
  )
}
