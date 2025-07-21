import React from 'react'

export const AboutMeImage = () => {
  return (
    <div className="h-[500px] w-[300px] relative">
        <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden">
            <img src="/images/about/about-me.jpg" alt="about me image" className="h-full w-auto object-cover" />
        </div>
        <div className="h-[500px] w-[250px] bg-orange absolute dark:bg-orange bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] z-[-10]"></div>
    </div>
  )
}
