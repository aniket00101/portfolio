import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../framerMotion/variants';

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn('left', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.4 }}
      className="h-auto w-full border-2 border-orange border-dashed rounded-2xl p-6 bg-[#1c1c1e] shadow-lg"
    >
      <p className="font-bold text-cyan text-xl mb-1">{experience.job}</p>
      <p className="text-lightGrey text-sm">{experience.date}</p>
      <ul className="list-disc mt-4 pl-5 text-white space-y-2 text-sm leading-relaxed">
        {experience.responsibility.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;
