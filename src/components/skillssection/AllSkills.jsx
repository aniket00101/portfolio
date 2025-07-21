import React from 'react'
import { FaHtml5, FaCss3, FaReact, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill, RiFirebaseFill } from "react-icons/ri";
import { SiRedux, SiFlask, SiExpress, SiMongodb, SiMysql, SiSocketdotio, SiRender, SiC, SiCplusplus } from "react-icons/si";
import { FaNodeJs, FaJava, FaPython } from "react-icons/fa6";
import { BiLogoDjango } from "react-icons/bi";
import { IoLogoVercel } from "react-icons/io5";
import { GrGraphQl } from "react-icons/gr";

const skills = [
    {
        icon: FaHtml5,
    },
    {
        icon: FaCss3,
    },
    {
        icon: IoLogoJavascript,
    },
    {
        icon: FaReact,
    },
    {
        icon: RiTailwindCssFill,
    },
    {
        icon: SiRedux,
    },
    {
        icon: BiLogoDjango,
    },
    {
        icon: SiFlask,
    },
    {
        icon: FaNodeJs,
    },
    {
        icon: SiExpress,
    },
    {
        icon: SiMongodb,
    },
    {
        icon: SiMysql,
    },
    {
        icon: SiSocketdotio,
    },
    {
        icon:IoLogoVercel,
    },
    {
        icon:RiFirebaseFill,
    },
    {
        icon:SiRender,
    },
    {
        icon:GrGraphQl,
    },
    {
        icon:FaGithub,
    },
    {
        icon:SiC,
    },
    {
        icon:SiCplusplus,
    },
    {
        icon:FaPython,
    },
    {
        icon:FaJava,
    },
     

]

function AllSkills() {
  return (
    <div className="grid md:grid-cols-5 lg:grid-cols-7 sm:grid-cols-3 gap-9 my-12">
        {skills.map((item,index)=>{
            return<div key={index} className="flex flex-col items-center">
                <item.icon className="text-7xl text-orange"/>
            </div>
        })}
    </div>
  )
}10

export default AllSkills