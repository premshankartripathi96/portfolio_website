import { assets } from "@/assets/assets";
import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto min-h-screen pt-24 flex flex-col items-center justify-center gap-4">
      <div>
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi I'm Prem Shankar Tripathi
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
        Full Stack Developer Based in Kanpur.</h1>
        <p>
            I am a passionate Full Stack Developer with a keen eye for design and a love for creating seamless user experiences by blending modern AI and ML concepts. My journey in web development has been driven by a desire to bring ideas to life through code, and I thrive on the challenge of turning complex problems into elegant solutions
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black/90 text-white flex items-center gap-2 hover:bg-black ' >Contact Me <Image src={assets.right_arrow_white} alt='' className='w-4'/></a>
              <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:border-black'>My Resume <Image src={assets.download_icon} alt='' className='w-4'/></a>
        </div>
    </div>
  );
};

export default Header;
