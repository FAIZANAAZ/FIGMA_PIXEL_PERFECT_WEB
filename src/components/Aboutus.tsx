"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaLinkedin, FaTwitter } from 'react-icons/fa6'
import { CiGlobe } from 'react-icons/ci'
import { Button } from './ui/button'
import {teamMembers} from "../../constant/about"
import {TeamMember} from "../../constant/about"
const Aboutus = () => {

  const [datateam, setDataTeam] = useState<TeamMember[]>([])

  useEffect(() => {
    
  return(
    setDataTeam(teamMembers)
  )
   
  }, [])
  
  return (
<>
<section className='w-full py-[112px] text-center '>
    <h1 className='xsm:my-h1 text-[32px] font-bold w-full '>Our Team</h1>
    <p className='mt-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

    {/* cardsdiv */}
    <div className='bg-MainColor xsm:mt-[80px] mt-[48px] w-full grid  xsm:grid-rows-2 grid-cols-1 xsm:grid-cols-3 h-[723px] xsm:h-auto gap-x-[48px] gap-y-[48px] xsm:gap-y-[64px] overflow-y-auto'>
        {/* cards */}
        
       {datateam.map((item) => (
         <div key={item.id} className=' flex-col justify-center'>
         <div className='inline-block m-auto mb-[24px]'>  
             <Image src={item.image} alt="image" width={1000} height={1000} className='h-[80px] w-[80px]'/>
             </div>
            

             <h1 className='text-[20px] font-semibold leading-[150%]'>{item.name}</h1>
             <p className='text-[18px] leading-[150%] mb-[24px]'>{item.role}</p>

             <div className='flex justify-center  gap-[14px] m-auto'>
             <FaLinkedin  size={24} />
             <FaTwitter size={24} />
             <CiGlobe size={24} />
             </div>

         
     </div>   
       ))}
    </div>
    <Button variant={"transprarentbtn"} className='mt-[48px]  xsm:hidden'>View All</Button>

</section>
</>
  )
}

export default Aboutus