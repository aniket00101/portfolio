import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { PiGithubLogoBold } from "react-icons/pi";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";  

const Contactsocial = () => {
  return (
    <div className="flex gap-4">
        <SingleContactSocial link='https://github.com/aniket00101' Icon={PiGithubLogoBold}/>
        <SingleContactSocial link='https://www.linkedin.com/in/aniket-das-7766b129a/' Icon={FaLinkedinIn}/>
        <SingleContactSocial link='https://www.instagram.com/_aniketdas_?igsh=bHNuNTI4OW0yNG9t' Icon={FaInstagram}/>
    </div>
  )
}

export default Contactsocial
