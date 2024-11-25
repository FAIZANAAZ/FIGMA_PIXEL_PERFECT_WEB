"use client"
import React, { useEffect, useState } from 'react'
import { IoMdStar } from 'react-icons/io'
import Image from 'next/image'
import {testimonials} from "../../constant/testimunialdata"
import { Testimonialtype } from '../../constant/testimunialdata'

const Testimonials = () => {
  const [data, setData] = useState<Testimonialtype[]>([])

  useEffect(() => {
    
    return(
      setData(testimonials)
    )
     
    }, [])
  
  return (
<>
<section className='w-full xsm:px-[64px] px-[24px] py-[112px] '>
    <h1 className='xsm:my-h1 text-[32px] font-bold '>Customer testimonials</h1>
    <p className='mt-[24px]'>lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <div className='w-full flex flex-row  gap-[32px] overflow-x-auto mt-[80px] mx-auto'>
        {/*card div  */}
       {data.map((items) => (

<div key={items.id} className='p-[32px] shrink-0 border-black border-2 border-solid  w-[362px]'>
<div className='flex gap-[4px] mb-[24px]'>
<IoMdStar size={24}/>
<IoMdStar size={24}/>
<IoMdStar size={24}/>
<IoMdStar size={24}/>
<IoMdStar size={24}/>

</div>
<p className='mb-[24px]'>{items.review}</p>

<div className='flex gap-[20px] items-center '>
<Image src={items.image} alt="image" width={1000} height={1000} className='h-[80px] w-[80px] rounded-full overflow-hidden
'/>
<div className='h-full   justify-start flex-col '>
    <h1 className='font-semibold' >{items.name}</h1>
    <p >{items.role}</p>
</div>

</div>
</div>
           
       ))}
    

    </div>

</section>
</>
  )
}

export default Testimonials