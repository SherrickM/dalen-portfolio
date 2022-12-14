import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {BiUser} from 'react-icons/bi'
import {BsCamera2} from 'react-icons/bs'
// import {HiOutlineDesktopComputer} from 'react-icons/hi'
import {MdOutlineMarkEmailUnread} from 'react-icons/md'
// import {useState} from 'react'



function Nav() {
  // const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href="/"><FaHome/></a>
      <a href="/about"><BiUser/></a>
      {/* <a href="#experience"><BiBook/></a> */}
      <a href="/portfolio"><BsCamera2/></a>
      <a href="/contact"><MdOutlineMarkEmailUnread/></a>
    </nav>
  )
}

export default Nav