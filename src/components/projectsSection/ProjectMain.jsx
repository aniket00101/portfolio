import React from 'react'
import ProjectText from './ProjectText'
import SingleProject from './SingleProject'

const projects = [
  {
    name: 'Green Hand Crop Recomadantion and price prediction project',
    year: '2025',
    align: 'right',
    image: '/images/project/greenHand.png',
    link: 'https://greenhand-pr391.onrender.com/',
    sourcecode: 'https://github.com/aniket00101/GreenHand-PR391'
  },
  {
    name: 'Book Design portfolio',
    year: '2025',
    align: 'left',
    image: '/images/project/bookportfolio.png',
    link: 'https://portfolio-book-design.vercel.app/',
    sourcecode: 'https://github.com/aniket00101/Portfolio-Book-design-'
  }
]
const ProjectMain = () => {
  return (
    <div id='projects' className="max-w-[1200px] mx-auto px-4">
      <ProjectText />
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => {
          return <SingleProject key={index} name={item.name} year={item.year} align={item.align} image={item.image} link={item.link} sourcecode={item.sourcecode} />
        })}

      </div>
    </div>
  )
}

export default ProjectMain