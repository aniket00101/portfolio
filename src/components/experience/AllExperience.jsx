import React from 'react';
import SingleExperience from './SingleExperience';
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import { fadeIn } from '../framerMotion/variants';

const experiences = [
  {
    job: 'Front-End Developer',
    date: '29th August 2024 - 17th February 2025',
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
    date: '20th March 2025 - 30th August 2025',
    responsibility: [
      "Developing scalable backend APIs using Node.js, Express, and MongoDB.",
      "Building RESTful services and integrations with Django and Flask.",
      "Designing and managing relational databases using MySQL for robust data handling.",
      "Creating secure and efficient backend logic for web applications.",
      "Handling authentication, routing, and data flow in full-stack applications."
    ],
  },
  {
    job: 'Programmer | Core CS Fundamentals',
    date: '2023 - 2025',
    responsibility: [
      "Solved problems using C, C++, Python, and Java, focusing on logic-building and syntax mastery.",
      "Practiced Data Structures and Algorithms (DSA) including arrays, linked lists, trees, graphs, and sorting algorithms.",
      "Built command-line programs and small projects to strengthen core programming concepts.",
      "Participated in coding contests and improved problem-solving speed on platforms like GFG, HackerRank."
    ],
  }
];

const AllExperience = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-12">
      {experiences.map((experience, index) => (
        <div key={index} className="relative">
          <SingleExperience experience={experience} />
          {index < experiences.length - 1 && (
            <motion.div
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              className="absolute -right-10 top-1/2 transform -translate-y-1/2 lg:block hidden"
            >
              <FaArrowRight className="text-4xl text-orange" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AllExperience;
