import React, { useState } from 'react'
import './header.scss'

const Header = () => {

  window.addEventListener("scroll",function (){
    const header = document.querySelector(".header");
    if(window.scrollY >=80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header")
  })

  const [Toggle,showMenu] = useState(false);
  const [active , setActive] = useState("#home")

  return (
    <header className='header'>
        <nav className='nav container' >
            <a href='#' className='nav__logo'>
                Peyman
            </a>
            <div className={Toggle? 'nav__menu show-menu ':"nav__menu"}>
                <ul className='nav__list grid' >
                  <li className='nav__item'>
                    <a href="#home" onClick={()=>setActive("#home")} className={active==="#home"?"nav_link active-link":"nav_link"}>
                      <i className='uil uil-estate nav__icon'></i> Home
                    </a>
                  </li>
                  <li className='nav__item'>
                    <a href="#about" onClick={()=>setActive("#about")} className={active==="#about"?"nav_link active-link":"nav_link"}>
                      <i className='uil uil-user nav__icon'></i> About
                    </a>
                  </li>
                  <li className='nav__item'>
                    <a href="#skills" onClick={()=>setActive("#skills")} className={active==="#skills"?"nav_link active-link":"nav_link"}>
                      <i className='uil uil-file-alt nav__icon'></i> Skill
                    </a>
                  </li>
                  <li className='nav__item'>
                    <a href="#Qualification" onClick={()=>setActive("#Qualification")} className={active==="#Qualification"?"nav_link active-link":"nav_link"}>
                      <i className='uil uil-briefcase-alt nav__icon'></i>
                      Qualification
                    </a>
                  </li>
                  <li className='nav__item'>
                    <a href="#projects" onClick={()=>setActive("#projects")} className={active==="#projects"?"nav_link active-link":"nav_link"}>
                      <i className='uil uil-scenery nav__icon'></i> Projects
                    </a>
                  </li>
                  <li className='nav__item'>
                    <a href="#contact" onClick={()=>setActive("#contact")} className={active==="#contact"?"nav_link active-link":"nav_link"}>
                      <i className='uil uil-message nav__icon'></i> Contact
                    </a>
                  </li>
                </ul>

                <i className='uil uil-times nav__close' onClick={()=>showMenu(!Toggle)} ></i>
            </div>

            <div className='nav__toggle' onClick={()=>showMenu(!Toggle)} >
              <i className='uil uil-apps'></i>
            </div>
        </nav>
    </header>
  )
}

export default Header