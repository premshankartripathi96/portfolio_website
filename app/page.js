'use client'
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";
<<<<<<< HEAD
import Projects from "./components/Project";
import { useEffect, useState } from "react";

export default function Home() {

 /* ----- const [isDarkMode, setIsDarkMode] =useState(false); 

  useEffect(() => {
    if (localStorage.theme === 'dark'|| (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true)
      } 
      else {
        setIsDarkMode(false)
      }
  }, [])
=======
//import { useEffect, useState } from "react";

export default function Home() {

/* const [isDarkMode, setIsDarkMode] =useState(false); 
>>>>>>> 33bbaa1539789bc7c0f4ee397db9e8af9ace7ca7

  useEffect(() => {
   
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
    else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }

<<<<<<< HEAD
  }, [isDarkMode]) ----- */
=======
  }, [isDarkMode])

  */
>>>>>>> 33bbaa1539789bc7c0f4ee397db9e8af9ace7ca7
  
  return (
   <>
   <Navbar />
   <Header />
   <About />
   <Projects />
   <Services />
   <Work />
   <Contact />
   <Footer />
   </>
);
}
