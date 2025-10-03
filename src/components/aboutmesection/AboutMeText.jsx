import { FaGithub } from "react-icons/fa";
import { IoMdRibbon } from "react-icons/io"; // Example certificate icon, you can change it

export const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      
      <p className="text-white sm:text-lg lg:text-2xl">I'm Aniket Das, a B.Tech Computer Science and Engineering student at Narula Institute of Technology with a strong passion for Full Stack Web Development and Machine Learning. I enjoy building dynamic and responsive web applications, and I'm constantly exploring new technologies to enhance user experience and backend performance. My interest in machine learning drives me to solve real-world problems using data-driven solutions. I'm always eager to learn, collaborate, and take on new challenges that push the boundaries of innovation.</p>
      
      <div className="flex gap-4 mt-10 flex-wrap w-full max-w-md md:justify-start sm:justify-center">
      
        <a href="https://github.com/aniket00101" className="flex-1 min-w-[140px] h-12 flex items-center justify-center gap-2 border-2 border-orange rounded-full py-2 px-4 text-lg backdrop-blur-xl hover:bg-orange transition-all duration-500 cursor-pointer text-white hover:text-cyan" target="_blank" rel="noopener noreferrer"><FaGithub className="text-xl" />My Projects</a>

        <a href="#certificate" className="flex-1 min-w-[140px] h-12 flex items-center justify-center gap-2 border-2 border-orange rounded-full py-2 px-4 text-lg backdrop-blur-xl hover:bg-orange transition-all duration-500 cursor-pointer text-white hover:text-cyan"><IoMdRibbon className="text-xl"/>Certificates</a>
      
      </div>
    </div>
  );
};
