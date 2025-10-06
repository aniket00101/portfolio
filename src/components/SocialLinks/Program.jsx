import React from 'react'
import { SiLeetcode } from "react-icons/si";
import SingleContactSocial from './SingleContactSocial'

const Program = () => {
  return (
    <div className="flex gap-4">
        <SingleContactSocial link='https://leetcode.com/u/aniket800/' Icon={SiLeetcode}/>
    </div>
  )
}

export default Program

