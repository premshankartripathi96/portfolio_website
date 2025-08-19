import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>

        <div className='text-center'>

            <Image src={assets.logo} alt='' className='w-40 mx-auto mb-6' /> 

           <div className='w-max mx-auto flex items-center gap-2'>
             <Image src={assets.mail_icon} alt='' className='w-6' />pstripathi2020@gmail.com 
           </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>
                © 2025 Prem Shankar Tripathi. All Rights Reserved.

            </p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li>
                    <a target='_blank' href="https://github.com/premshankartripathi96" >GitHub</a>
                </li>
                <li>
                    <a target='_blank' href="https://www.linkedin.com/in/prem-shankar-tripathi-3496472bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" >LinkedIn</a>
                </li>
                <li>
                    <a target='_blank' href="https://x.com/shivatripathi_8" >Twitter</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer