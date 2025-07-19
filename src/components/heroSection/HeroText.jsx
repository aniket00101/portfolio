import React from 'react'

export const HeroText = () => {
    return (
        <div className="flex flex-col gap-4 h-full justify-center md:text-left md:pl-10 sm:text-center">
            <h2 className="lg:text-2xl sm:text-xl uppercase text-cyan">MERN stack Developer</h2>

            <h1 className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange">Aniket Das</h1>

            <p className="text-lg mt-4 text-white">Innovative MERN developer crafting modern, <br/> scalable, and efficient web solutions.</p>
        </div>
    )
}
