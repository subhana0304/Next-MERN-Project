"use client"
import React from 'react'
import { motion } from "framer-motion";
import { SlSocialInstagram } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from 'next/image'

export default function Contact() {
    return (
        <div className='px-16 my-20'>
            <div className='grid grid-cols-2 px-2'>
                <div>
                    <h2 className='text-[40px] font-semibold'>We love crafting unforgettable digital experiences, brands and websites with people like you.</h2>
                    <div className='flex items-end mt-20'>
                        <div className=''>
                            <p className='text-[16px] text-gray-700'>Get in touch</p>
                            <h3 className='text-[22px] font-semibold my-2'>+44 207 112 82 85</h3>
                            <h3 className='text-[22px] font-semibold my-2'>contact@artistsweb.com</h3>
                            <h3 className='text-[22px] font-semibold my-2'>Artistsweb, 18 Soho Square, London, W1D 3QL, United Kingdom</h3>
                        </div>
                    </div>
                </div>
                <div className='ps-10 ms-10 flex flex-col gap-8'>
                    <div>
                        <div className='bg-black p-3 ms-10 rounded-[30px] text-center'>
                            <div className="flex justify-between px-6 items-center">
                                <p className='text-[20px] text-white'>Follow us</p>
                                <div className='flex items-center text-white'>
                                    <div className='border-black border-2 rounded-full p-3 hover:border-[#545cff] hover:duration-300'>
                                        <SlSocialInstagram className='text-[28px] hover:text-[30px] hover:duration-300' />
                                    </div>
                                    <div className='border-black border-2 rounded-full p-3 hover:border-[#545cff] hover:duration-300'>
                                        <FaFacebook className='text-[28px] hover:text-[30px] hover:duration-300' />
                                    </div>
                                    <div className='border-black border-2 rounded-full p-3 hover:border-[#545cff] hover:duration-300'>
                                        <FaXTwitter className='text-[28px] hover:text-[30px] hover:duration-300' />
                                    </div>
                                    <div className='border-black border-2 rounded-full py-3 px-2 hover:border-[#545cff] hover:duration-300'>
                                        <Image
                                            src="/images/w..png"
                                            alt="Description of image"
                                            width={50}
                                            height={50}
                                            className='rounded-full hover:w-[52px]'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='bg-[#ecf1f4] p-10 ms-10 rounded-3xl text-center'>
                            <h2 className='text-[38px] font-semibold'>Let's get started</h2>
                            <p className='text-[16px] text-gray-700 my-5 mb-10'>We’d love to hear about your project.</p>
                            <button className=" rounded-full bg-[#545cFf] text-center overflow-hidden w-96 py-4">
                                <motion.span
                                    initial={{ y: 0 }} // Start position
                                    whileHover={{ y: ["130%", "0%"] }} // Refined keyframes
                                    transition={{ duration: 1.5, ease: "easeInOut" }} // Smooth and continuous
                                    className="block text-[24px] font-medium text-white"
                                >
                                    Get in touch
                                </motion.span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
