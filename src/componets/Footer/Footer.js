import React from 'react'
import './footer.css'



function Footer() {
  return (
    <footer>
      
      <a href="#header" className='footer_logo'>Code by SM2 </a>
      
      
      <ul className="permalinks">
       
        <li><a href="#header">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="mailto:smcneal89@gmail.com">Contact</a></li>
      </ul>

    <div className="footer_socials">  
        
        <a href="https://www.facebook.com/sherrick.marquis/"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="https://www.linkedin.com/in/sherrick-mcneal-725183193/" ><i class="fa-brands fa-linkedin-in"></i></a>
        <a href="https://github.com/SherrickM/" ><i class="fa-brands fa-github"></i></a>
        <a href="https://www.instagram.com/s.marquis_" ><i class="fa-brands fa-instagram"></i></a>
        
     </div>


    </footer>
  )
}

export default Footer