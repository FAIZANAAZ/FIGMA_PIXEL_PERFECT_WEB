"use client"
import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoMenu } from 'react-icons/io5';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

const Header = () => {

    const [menu, setMenu] = useState(false);

  const openmenu = () => {
    setMenu(!menu);
  };
  return (
    <>
    <header className='w-full flex flex-col gap-4 '>
        {/* top div */}
        <div className='w-full bg-MainColor h-[54px] xsm:flex justify-between items-center px-[62px] hidden border-b-[1px] border-black border-solid'>
            <div className='h-[30px] flex gap-[16px] justify-center items-center leading-[150%] text-[14px]'>
                <p>Phone Number: 956 742 455 67</p>
                <div className='w-[1px] h-[30px] bg-[#676767]'></div>
                <p className=''>Email:naaz@gmail.com</p>
            </div>

            <div className='flex justify-center items-center gap-[12px] '>
            <FaFacebookF size={24}/>
            <FaInstagram size={24}/>
            <FaTwitter size={24}/>
            <FaLinkedin size={24}/>
            </div>
            </div>
{/* bottom div */}
<div className='w-full h-[72px] bg-MainColor flex  justify-between items-center xsm:px-[64px] xsm:py-[16px] px:[24px] border-b-[1px] border-black border-solid   '>

<Image src="/logo.png" alt="image" width={131} height={41}/>
<div className=' justify-between items-center gap-[32px] hidden xsm:flex bg-white p-[10px] '>
    <ul className='flex gap-[52px] justify-center items-center text-[16px]'>
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/Aboutus"}>About us</Link></li>
        <li><Link href={"/Testimonialus"}>Testimonial</Link></li>
        <li><Link href={"/CourseCatygori"}> Services</Link></li>
        <li><Link href={"/Archievementus"}> Archievement</Link></li>

        

    </ul>
    {/* Buttondiv */}
    <div className='flex justify-center items-center gap-[16px] '>
        <Button variant={"transprarentbtn"}>login</Button>
        <Button>Sign up</Button>

    </div>
</div>
<IoMenu size={24} className='xsm:hidden block font-bold' onClick={openmenu}/>

</div>
        
    </header>


    <AnimatePresence>
        {menu && (
          <motion.div
          className={
            "absolute z-10 top-[60px] right-[2px] flex flex-col space-y-[20px] text-center font-bold  h-[160px] w-[160rpx] bg-black text-white text-[30rpx]  sm:hidden p-4 mt-3 "
          }
            key="menuu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "160px", opacity: 0.8 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
      <ul className='flex flex-col gap-[22px] justify-center items-center text-[16px] '>
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/Aboutus"}>About us</Link></li>
        <li><Link href={"/Testimonialus"}>Testimonial</Link></li>
        <li><Link href={"/CourseCatygori"}> Services</Link></li>
        <li><Link href={"/Archievementus"}> Archievement</Link></li>

    </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header