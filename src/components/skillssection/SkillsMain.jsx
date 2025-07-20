import React from 'react'
import SkillsText from './SkillsText'
import AllSkills from './AllSkills'

import { SubSkills } from './SubSkills'

const SkillsMain = () => {
  return (
    <div id="skills">
        <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
            <SkillsText />
            {/* <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] lg:block sm:hidden ">
                 <AllSkills />
            </div> */}
            <div className="lg:block sm:hidden ">
                 <AllSkills />
            </div>
            <div className="sm:block lg:hidden">
                <AllSkills />
            </div>
        </div>
        <SubSkills />
    </div>
  )
}

export default SkillsMain