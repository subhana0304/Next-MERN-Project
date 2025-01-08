'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";

export default function DigitalPartner() {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    return (
        <div className='px-16 my-20'>
            <div className="px-2 grid grid-cols-2">
                <div>
                    <div>
                        <h2 className='text-[54px] font-semibold'>Your Digital Partner</h2>
                        <p className='text-[24px] pe-12 mt-5'>We partner with companies of all sizes to solve <br />
                            complex business challenges and define their digital <br />
                            strategies and objectives that deliver results. We <br />
                            help bring ideas to life and create brands, websites <br />
                            & digital products that work.</p>
                    </div>
                    <div className="dpart-lb flex  items-center gap-5 mt-20">
                        <Image
                            data-aos="fade-up"
                            src="/images/cd.png"
                            alt="Description of image"
                            width={150}
                            height={150}
                            className='dpart-lb-img rounded-full'
                        />
                        <p data-aos="fade-up" className='text-[23px] font-medium text-gray-500 dpart-lb-text'>Brands who've trusted us...</p>
                    </div>
                </div>
                <div className='flex items-end'>
                    <div className='bg-[#ecf1f4] p-10 rounded-3xl text-center flex items-end mt-auto'>
                        <div className="flex gap-10 p-8">
                            <div className='text-center'>
                                <h1 className='text-[54px] font-semibold'>20</h1>
                                <p className='text-[24px] mt-10'>Years on the market</p>
                            </div>
                            <div className='text-center ps-10 border-s'>
                                <h1 className='text-[54px] font-semibold'>500</h1>
                                <p className='text-[24px] mt-10'>Satisfied Customers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
