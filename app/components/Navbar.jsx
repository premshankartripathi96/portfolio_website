import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Navbar = ({isDarkMode , setIsDarkMode}) => {
  const [isScroll, setIsScroll] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

<<<<<<< HEAD
    const [isScroll, setIsScroll] = useState(false)


    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)' 
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
=======
  // Scroll event 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
>>>>>>> 33bbaa1539789bc7c0f4ee397db9e8af9ace7ca7
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup listener
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
<<<<<<< HEAD
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt='' className='w-full'/>
    </div>
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-6 flex items-center justify-between z-50 ${isScroll ? " bg-opacity-50 backdrop-blur-lg shadow-sm " : ""}`}>
<a href="#top">
    <Image src={assets.logo} alt='' className='w-40 cursor-pointer mr-14'/>
</a>
<ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" :"bg-white-80% shadow-sm bg-opacity-50"}`}> 
    <li>
        <a href="#top" className='font-Ovo'>Home</a> 
    </li>
    <li>
        <a href="#about" className='font-Ovo'>About Me</a>
    </li><li>
        <a href="#projects" className='font-Ovo'>Projects</a>
    </li><li>
        <a href="#services" className='font-Ovo'>Services</a>
    </li><li>
        <a href="#work" className='font-Ovo'>My Work</a>
    </li><li>
        <a href="#contact" className='font-Ovo'>Contact Me</a>
    </li>
    
</ul>
<div className='flex items-center gap-5'>
=======
      {/* Background */}
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt='' className='w-full' />
      </div>
>>>>>>> 33bbaa1539789bc7c0f4ee397db9e8af9ace7ca7

      {/* Navbar */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? 'bg-red bg-opacity-50 backdrop-blur-lg shadow-sm'
            : ''
        }`}
      >
        {/* Logo */}
        <a href="#top">
          <Image
            src={assets.logo}
            alt='Logo'
            className='w-28 cursor-pointer mr-14'
          />
        </a>

<<<<<<< HEAD
    <a href="#contact" className='hidden md:flex items-center gap-3 px-6 py-2 border border-black rounded-full ml-4 font-Ovo'>Contact<Image src={assets.arrow_icon} alt='' className='w-3'/></a>
=======
        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? '' : ' shadow-sm bg-opacity-50' }`}
        >
          <li><a href="#top" className='font-Ovo'>Home</a></li>
          <li><a href="#about" className='font-Ovo'>About Me</a></li>
          <li><a href="#services" className='font-Ovo'>Services</a></li>
          <li><a href="#work" className='font-Ovo'>My Work</a></li>
          <li><a href="#contact" className='font-Ovo'>Contact Me</a></li>
        </ul>
>>>>>>> 33bbaa1539789bc7c0f4ee397db9e8af9ace7ca7

        {/* Right Side */}
        <div className='flex items-center gap-4'>
          <button aria-label="Toggle Dark Mode">
            <Image src={assets.moon_icon} alt='Dark Mode' className='w-6 cursor-pointer' />
          </button>

          <a
            href="#contact"
            className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-black rounded-full ml-4 font-Ovo'
          >
            Contact
            <Image src={assets.arrow_icon} alt='' className='w-3' />
          </a>

          {/* Mobile Menu Button */}
          <button
            className='block md:hidden ml-3'
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Image src={assets.menu_black} alt='Menu' className='w-6 cursor-pointer' />
          </button>
        </div>

<<<<<<< HEAD
 <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-1/2 bg-rose-50 transition duration-500 cursor-pointer' >

    <div className='absolute top-6 right-6' onClick={closeMenu}>
        <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
    </div>
   <li>
        <a href="#top" className='font-Ovo'>Home</a>
    </li>
    <li>
        <a href="#About" className='font-Ovo'  onClick={closeMenu}>About Me</a>
    </li><li>
        <a href="#projects" className='font-Ovo'  onClick={closeMenu}>Projects</a>
    </li><li>
        <a href="#services" className='font-Ovo'  onClick={closeMenu}>Services</a>
    </li><li>
        <a href="#work" className='font-Ovo' onClick={closeMenu}>My Work</a>
    </li><li>
        <a href="#contact" className='font-Ovo' onClick={closeMenu}>Contact Me</a>
    </li>
     
 </ul>
    </nav>
=======
        {/* Mobile Menu */}
        <ul
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 cursor-pointer
          ${isMenuOpen ? 'right-0' : '-right-64'}`}
        >
          <button
            className='absolute top-6 right-6'
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Menu"
          >
            <Image src={assets.close_black} alt='Close' className='w-5 cursor-pointer' />
          </button>

          <li><a href="#top" className='font-Ovo' onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#about" className='font-Ovo' onClick={() => setIsMenuOpen(false)}>About Me</a></li>
          <li><a href="#services" className='font-Ovo' onClick={() => setIsMenuOpen(false)}>Services</a></li>
          <li><a href="#work" className='font-Ovo' onClick={() => setIsMenuOpen(false)}>My Work</a></li>
          <li><a href="#contact" className='font-Ovo' onClick={() => setIsMenuOpen(false)}>Contact Me</a></li>
        </ul>
      </nav>
>>>>>>> 33bbaa1539789bc7c0f4ee397db9e8af9ace7ca7
    </>
  )
}

export default Navbar
