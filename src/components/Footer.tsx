import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { footerdata } from '../../constant/footer'
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import { FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
   <>
   <footer className='w-full xsm:p-[80px] px-[24px] py-[48px] flex flex-col gap-[80px] text-center xsm:text-start'>
    {/* top div */}
 
 <div className='flex xsm:flex-row flex-col  justify-between items-center '>
 <div className='flex flex-col  gap-4 xsm:gap-0 w-[287px] xsm:w-auto'>
        <p className='leading-[150%] text-[18px] font-semibold'>Subscribe to our newsletter</p>
        <p className='leading-[150%] text-[18px] font-regular'>Lorem ipsum dolor sit amet consectetur.</p>
    </div>

<div className='flex flex-col gap-[16px] xsm:mt-0 mt-[24px]'>
<div className='flex flex-col items-center xsm:flex-row gap-4 '>
<Input placeholder='Enter your email ' className='xsm:w-[265px] w-full h-[48px] border-black '/>
<Button className=' xsm:w-auto w-full' variant={"transprarentbtn"}>Subscribe</Button>
</div>
<p>by subscribing you agree to with  our privacy policy</p>
</div>

 </div>

 {/* mid div */}
 <div className=' flex w-full xsm:flex-row flex-col text-center gap-10'>
<div className='xsm:w-[250px] h-[40px] inline-block xsm:block m-auto xsm:m-0'>
    <Image src="/Images/logo.png" alt="image" width={130} height={100} ></Image>
</div>

{footerdata.map((items) => (
  <div key={items.id} className='flex flex-col gap-[16px] w-[250px] xsm:text-start m-auto'>
  <h4 className='text-[16px] font-semibold leading-[150%]'>{items.heading}</h4>

  <ul className='flex flex-col gap-[8px]'>
   <li ><Link href={"#!"}> {items.link1}</Link></li>
   <li ><Link href={"#!"}> {items.link2}</Link></li>
   <li ><Link href={"#!"}> {items.link3}</Link></li>
   <li ><Link href={"#!"}> {items.link4}</Link></li>
   <li ><Link href={"#!"}> {items.link5}</Link></li>

  </ul>
</div>  
))}

 </div>

 {/* bottom */}
 <div className='w-full  pt-[32px] xsm:pt-0 text-center flex xsm:flex-row justify-between items-end h-auto xsm:h-[57px]  border-t-[1px]  border-black border-solid flex-col'>
    <div className='flex flex-col xsm:flex-row gap-[24px] '>
        <p className=''>2023 Ddsgnr. All  rights reserved</p>
       <div className='flex flex-row gap-[26px]'>
       <Link href={"#!"}>Privacy Policy</Link>
        <Link href={"#!"}>Terms of Service</Link>
        <Link href={"#!"}>Cookies Settings</Link>
       </div>

    </div>

    <div className='flex justify-center items-center mt-[24px] xsm:mt-0 gap-[12px] xsm:m-0 m-auto'>
            <FaFacebookF size={24}/>
            <FaInstagram size={24}/>
            <FaTwitter size={24}/>
            <FaLinkedin size={24}/>
            </div>
 </div>

   </footer>
   
   </>
  )
}

export default Footer