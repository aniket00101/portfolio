import React from 'react'
import SingleExperience from './SingleExperience'
import { FaArrowRight } from "react-icons/fa";
<FaArrowRight />
const experiences = [
  {
    job: 'Front-End Developer',
    date: '29th August 2024 - 17th May 2025',
    responsibility: [
      "Designing interactive web interfaces with React, Tailwind, and Redux.",
      "Turning ideas into elegant UIs using React and Tailwind.",
      "Delivering clean, responsive designs with Tailwind CSS and React.",
      "Frontend wizard building responsive apps with React and Tailwind.",
      "Crafting pixel-perfect components with HTML, CSS, and Tailwind CSS.",
      "Building fast, modern frontends with JavaScript, React, and Redux."
    ],
  },
  {
    job: 'Back-End Developer',
    date: '29th july 2024 - 30th November 2025',
    responsibility: [
      "Developing scalable backend APIs using Node.js, Express, and MongoDB.",
      "Building RESTful services and integrations with Django and Flask.",
      "Designing and managing relational databases using MySQL for robust data handling.",
      "Creating secure and efficient backend logic for web applications.",
      "Handling authentication, routing, and data flow in full-stack applications."
    ],
  }
]

const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">{experiences.map((experience,index)=>{
      return <>
         <SingleExperience key={index} experience={experience} />
         {index < 1 ? (<FaArrowRight className="text-6xl text-orange lg:block sm:hidden"/> ) : ( "" )}
      </>
      
    })}</div>
  )
}

export default AllExperience