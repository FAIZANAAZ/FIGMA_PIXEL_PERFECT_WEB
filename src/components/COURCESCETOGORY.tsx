import React from 'react'
import Image from 'next/image'
import {coursescategory} from "../../constant/catogory"


const COURCESCETOGORY = () => {
  
  return (
    <>
    <section className='w-full  xsm:py-[112px] xsm:Px-[64px] py-[48px] Px-[24px] flex flex-col justify-center gap-[80px] '>
        {/* top div */}
        <div className='xsm:w-[768px] w-[385px] text-center xsm:text-start flex flex-col gap-[24px] m-auto '>
            <h1 className='xsm:leading-[57.6px] leading-[41.6px] text-[32px] xsm:text-[48px] font-bold'>Explore Courses By Category</h1>
            <p className='leading-[27px] text-[18px]'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
        </div>
{/* bottom div */}

<div className='w-full flex xsm:gap-y-[64px] gap-y-[24px] gap-x-[24px] flex-wrap justify-center items-center'>

    {/* card div */}
    {coursescategory.map((item) => (

<div key={item.id} className='p-4 flex gap-[32px] items-center w-[410.67px] bg-MainColor'>
<Image src={item.image} alt="image" width={1000} height={1000} className='h-[100px] w-[100px]'/>
<div className=''>
    <p className='leading-[30px] text-[20px] font-semibold'>{item.title}</p>
    <p className='text-[18px] leading-[27px]'>{item.coursesAvailable}</p>
</div>
</div>
    ))}


</div>
    </section>
    </>
  )
}

export default COURCESCETOGORY