import React from 'react'
import {metrics} from '../../constant/achievement'

const Archievement = () => {
  return (
   <>
   <section className='w-full xsm:py-[112px] xsm:px-[64px] py-[48px] px-[24px] '>

<div className='flex flex-col gap-[32px]  '>
    {/* top div */}
<div className='flex flex-col gap-[16px]'>
    <h1 className='text-center xsm:text-[48px] xsm:leading-[120%] text-[32px] leading-[41.6px] font-bold'>Our Achievements</h1>
    <p className='text-center text-[18px] leading-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. <span className='hidden xsm:block'>Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</span> </p>
</div>
{/* bottom div */}

<div className='w-full flex flex-row justify-center items-center gap-[16px] xsm:gap-[24px] flex-wrap xsm:flex-nowrap '>
    {/* card div */}
    {metrics.map((item) => (

         <div key={item.id} className=' xsm:w-[296px] w-[122px] flex flex-col gap-2 items-center justify-center  '>
        <h1 className='xsm:text-[40px] xsm:leading-[48px] text-[20px] leading-[28px] font-bold '>{item.value}</h1>
        <p className='text-[16px] leading-[24px]'>{item.label}</p>

    </div>
    ))}
</div>
</div>
   </section>
   </>
  )
}

export default Archievement
