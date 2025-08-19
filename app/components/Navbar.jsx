import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false)
  const sideMenuRef = useRef(null)

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
  }

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(16rem)'
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="Header background" className="w-full" />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-7 flex items-center justify-between z-50 ${
          isScroll ? ' bg-opacity-50 backdrop-blur-lg shadow-sm' : ''
        }`}
        role="navigation"
        aria-label="Main Navigation"
      >
        <a href="#top">
          <Image src={assets.logo} alt="Logo" className="w-40 cursor-pointer mr-14" />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? '' : 'bg-white/50 shadow-sm bg-opacity-50'
          }`}
        >
          <li>
            <a href="#top" className="font-Ovo">Home</a>
          </li>
          <li>
            <a href="#about" className="font-Ovo">About Me</a>
          </li>
          <li>
            <a href="#projects" className="font-Ovo">Projects</a>
          </li>
          <li>
            <a href="#services" className="font-Ovo">Services</a>
          </li>
          <li>
            <a href="#work" className="font-Ovo">My Work</a>
          </li>
          <li>
            <a href="#contact" className="font-Ovo">Contact Me</a>
          </li>
        </ul>

        <div className="flex items-center gap-6">
          {/* Dark mode button (currently not functional) */}
          <button>
            <Image src={assets.moon_icon} alt="Dark mode icon" className="w-6 cursor-pointer" />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-6 py-2 border border-black/80 rounded-full ml-4 font-Ovo"
          >
            Contact
            <Image src={assets.arrow_icon} alt="Arrow icon" className="w-3" />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu} aria-label="Open Menu">
            <Image src={assets.menu_black} alt="Menu icon" className="w-6 cursor-pointer" />
          </button>
        </div>

        {/* --------- Mobile Menu --------- */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 cursor-pointer" >
          <div className="absolute top-6 right-6" onClick={closeMenu} role="button" tabIndex={0}>
            <Image src={assets.close_black} alt="Close menu" className="w-5 cursor-pointer" />
          </div>
          <li>
            <a href="#top" className="font-Ovo" onClick={closeMenu}>Home</a>
          </li>
          <li>
            <a href="#about" className="font-Ovo" onClick={closeMenu}>About Me</a>
          </li>
           <li>
            <a href="#projects" className="font-Ovo" onClick={closeMenu}>Projects</a>
          </li>
          <li>
            <a href="#services" className="font-Ovo" onClick={closeMenu}>Services</a>
          </li>
          <li>
            <a href="#work" className="font-Ovo" onClick={closeMenu}>My Work</a>
          </li>
          <li>
            <a href="#contact" className="font-Ovo" onClick={closeMenu}>Contact Me</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
