import React from 'react'
import './header.css'
import CTA from './CTA'
import dalen_welcome from '../../assests/dalen_welcome.png'
import Socials from './Socials'

function Header() {
  return (
   <header >
    <div className="continer header_container" id='header'>
      <h5>Hello I'm</h5>
      <h1>Dalen Coleman</h1>
      {/* add text-light to h5 */}
      <h5> Photographer & Videographer </h5>
      <CTA/>
      <Socials/>

    <div className="me">
      <img src={dalen_welcome} alt="img" />
    </div>

    <a href="#contact" className='scroll_down'>Scroll Down</a>
    </div>

   </header>
  )
}

export default Header