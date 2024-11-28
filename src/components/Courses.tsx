import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { GoStarFill } from "react-icons/go";
import { courses } from '../../constant/courses';

const Courses = () => {
    return (
        <>
            <section className="w-full xsm:py-[112px] py-[48px] px-[24px] gap-[60px] flex flex-col ">
                {/* top div */}
                <div className="flex flex-col gap-[16px] m-auto text-center">
                    <h2 className="xsm:text-[56px] text-[32px] font-bold leading-[67.2px] xsm:leading-[67.2px]">Courses</h2>
                    <p className="text-[18px]  leading-[27px] ">
                        Your Ultimate Guide to learning
                    </p>
                </div>

                {/* bottom div */}

                <div className="w-full flex flex-row  gap-[32px] flex-wrap ">
                    {/* card div */}
                    {courses.map((item) => (

                        <div key={item.id} className="flex flex-col gap-[24px] rounded-[5px] xsm:w-[389px] text-[380px]">
                            <Image
                                src={item.image}
                                alt="image"
                                width={416}
                                height={300}
                                className="xsm:w-[416px] w-full h-[300px]"
                            />
                            <div className="flex flex-col gap-[24px] pb-[24px] px-[16px] ">
                                <div className="flex justify-between text-[14px] leading-[21px]">
                                    <p>{item.category}</p>
                                    <p className="flex gap-[4px]">
                                        <GoStarFill size={24} color="#F7F7F7" />
                                        5.0
                                    </p>
                                </div>
                              <div>
                              <h1 className="text-[24px] font-bold leading-[33.6px]">
                                    {item.title}
                                </h1>
                                <p className="text-[16px] leading-[24px] ">
                                    {item.description}
                                </p>
                              </div>
                                <div className="flex flex-row gap-[36px] items-center ">
                                    <Button
                                        variant={"transprarentbtn"}
                                        className="px-[20px] py-[8px] rounded-[5px]"
                                    >
                                        Enroll Now
                                    </Button>
                                    <p className="text-[16px] leading-[24px]">{item.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Courses;
