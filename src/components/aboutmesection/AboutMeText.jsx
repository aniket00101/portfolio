import React from 'react'

export const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>

      <p className="text-white sm:text-lg lg:text-2xl">I'm Aniket Das, a B.Tech Computer Science and Engineering student at Narula Institute of Technology with a strong passion for Full Stack Web Development and Machine Learning. I enjoy building dynamic and responsive web applications, and I'm constantly exploring new technologies to enhance user experience and backend performance. My interest in machine learning drives me to solve real-world problems using data-driven solutions. I'm always eager to learn, collaborate, and take on new challenges that push the boundaries of innovation.
      </p>

      <div className="flex gap-4 mt-10 flex-wrap md:justify-start sm:justify-center">
        <a href="/Resume.pdf" download className="border-2 border-orange rounded-full py-2 px-4 text-lg flex items-center backdrop-blur-xl hover:bg-orange transition-all duration-500 cursor-pointer text-white hover:text-cyan">
          Download Resume
        </a>
      </div>

    </div>
  )
}