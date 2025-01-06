"use client"
import React from 'react'
import { motion } from "framer-motion";

export default function Services() {
    return (
        <div className='px-16'>
            <div className='px-2'>
                <h2 className='text-[54px] font-semibold'>
                    We’re good at
                </h2>
                <div className='grid grid-cols-2 mt-5'>
                    <div>
                        <p className='text-[16px] text-gray-700'>Services</p>
                        <h3 className='text-[32px] font-semibold my-3'>E-Commerce</h3>
                        <h3 className='text-[32px] font-semibold my-3'>Web Design</h3>
                        <h3 className='text-[32px] font-semibold my-3'>Web Development</h3>
                        <h3 className='text-[32px] font-semibold my-3'>Digital Products</h3>
                        <h3 className='text-[32px] font-semibold my-3'>Brand Identities</h3>
                        <h3 className='text-[32px] font-semibold my-3'>SEO Optimisation</h3>
                    </div>
                    <div >
                        <div className='bg-[#545cFf] p-10 rounded-3xl'>
                            <h2 className='text-[38px] font-semibold text-white'>Let's start with a conversation <br />
                                about how we can help you! Get in
                                touch, we're a nice bunch.</h2>
                            <div className='flex items-end gap-5 text-end mt-10'>
                                <button className=" rounded-full bg-white text-center overflow-hidden px-7 py-4">
                                    <motion.span
                                        initial={{ y: 0 }} // Start position
                                        whileHover={{ y: ["130%", "0%"] }} // Refined keyframes
                                        transition={{ duration: 1.5, ease: "easeInOut" }} // Smooth and continuous
                                        className="block text-[24px] font-medium"
                                    >
                                         Let's talk
                                    </motion.span>
                                </button>
                                <button className='border border-white text-white font-medium text-[24px] px-6 py-4 rounded-full'>0207 112 82 85</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
