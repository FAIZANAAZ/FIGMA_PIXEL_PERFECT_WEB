import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

const Hero = () => {
  return (
   <>
   <section >
    {/* topdiv */}
    <div className='w-full flex flex-col xsm:flex-row '>
{/* leftdiv */}
<div className="xsm:w-1/2  flex justify-center  items-center py-[64px] px-[24px] xsm:px-0  xsm:py-[250px] w-full ">

<div className='px-0 xsm:px-[80px] w-full'>
    <h1 className='text-[40px] xsm:text-[56px]
     mb-[24px] leading-[120%] font-bold'>Learn new skills online with ease</h1>

    <p className='text-[18px] leading-[150%] mb-[40px] '>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>

    
    <Button className='mr-[16px]'>Start learning now</Button>
    <Button variant={"transprarentbtn"}>Explore Courses</Button>

    </div>

</div>

{/* rightdiv */}
<div className="xsm:w-1/2 flex justify-center items-center w-full h-[390px]  xsm:h-[800px] overflow-hidden">
<Image src={"/images/main.png"} alt="image" width={640} height={2000}
className="xsm:object-cover w-[428px] xsm:w-[640px] object-center h-[390px] xsm:h-[900px]" />
</div>

</div>

  



    {/* bottomdiv */}
    <div className='w-full xsm:px-[8px] xsm:py-[80px] flex flex-col xsm:flex-row xsm:justify-between justify-center  bg-MainColor py-[48px] px-[24px] gap-[24px] sxm:gap-0'>
        <div className='w-[320px]'>
      <p className='text-[24px] leading-[140%] font-bold'>Trusted by 2000+ companies worldwide.</p>
      </div>
      <div className='flex overflow-x-auto gap-[16px]  xsm:gap-[19px] '>
        <Image className='w-[107px] xsm:w-[124px] h-[33px] xsm:h-[38px]' src="/images/imge1.png" alt="image" width={124} height={38}  />
        <Image className='w-[107px] xsm:w-[124px] h-[33px] xsm:h-[38px]' src="/images/image2.png" alt="image" width={124} height={38}/>
        <Image className='w-[107px] xsm:w-[124px] h-[33px] xsm:h-[38px]' src="/images/image3.png" alt="image" width={124} height={38}/>
        <Image className='w-[107px] xsm:w-[124px] h-[33px] xsm:h-[38px]' src="/images/image4.png" alt="image" width={124} height={38}/>
        <Image className='w-[107px] xsm:w-[124px] h-[33px] xsm:h-[38px]' src="/images/image5.png" alt="image" width={124} height={38}/>
        <Image className='w-[107px] xsm:w-[124px] h-[33px] xsm:h-[38px]' src="/images/image6.png" alt="image" width={124} height={38}/>

      </div>
    </div>
   </section>
   </>
  )
}

export default Hero