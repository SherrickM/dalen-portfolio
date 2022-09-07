import React from 'react'
import {AiFillInstagram} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsCalendar3} from 'react-icons/bs'

function Socials() {
  return (
    <div className="socials">
      <a href="" target={'_blank'}> <BsCalendar3/></a>
      <a href="" target={'_blank'}><AiFillInstagram/></a>
      <a href="" target={'_blank'}><FaLinkedinIn/></a>
      
    </div>
  )
}

export default Socials