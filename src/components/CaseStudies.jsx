"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

export default function RotatingDataWithAnimation() {
    // Data to cycle through
    const data = [
        { value: 20, text: "Years on the market" },
        { value: 15, text: "Website Awards" },
        { value: 500, text: "Satisfied Customers" },
    ];

    // State to track the current index
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Set an interval to change the current index every 3 seconds
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 3000);

        // Clear the interval when the component is unmounted
        return () => clearInterval(interval);
    }, [data.length]);

    // Variants for animation
    const variants = {
        hidden: { opacity: 0, y: 50 }, // Starts off below (y: 50)
        visible: { opacity: 1, y: 0 }, // Moves to its position (y: 0)
        exit: { opacity: 0, y: -50 }, // Moves out above (y: -50)
    };
    return (
        <div className='px-16  my-24'>
            <div className="px-2 grid grid-cols-2">
                <div className="flex items-center gap-6">
                    <div className="bg-black rounded-full w-20 h-20 flex items-center justify-center">
                        {/* AnimatePresence ensures smooth transition between elements */}
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={data[currentIndex].value} // Key helps identify unique elements
                                className="text-white text-[23px] font-bold"
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={variants}
                                transition={{ duration: 1 }} // Smooth transition for animation
                            >
                                {data[currentIndex].value}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                    <div>
                        <AnimatePresence mode="wait">
                            <motion.h2
                                key={data[currentIndex].text} // Key helps identify unique elements
                                className="text-gray-600 text-[23px]"
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={variants}
                                transition={{ duration: 1 }} // Smooth transition for animation
                            >
                                {data[currentIndex].text}
                            </motion.h2>
                        </AnimatePresence>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between items-center">
                        <h2 className='text-[24px] text-[rgb(17, 17, 17)]'>We build engaging websites,<br/> brands & innovative e-commerce <br/> solutions.</h2>
                        <div>
                        <button className=" rounded-full bg-[#545cFf] text-center overflow-hidden px-7 py-4">
                            <motion.span
                                initial={{ y: 0 }} // Start position
                                whileHover={{ y: ["130%", "0%"] }} // Refined keyframes
                                transition={{ duration: 1.5, ease: "easeInOut" }} // Smooth and continuous
                                className="block text-[24px] font-medium text-white"
                            >
                                Case Studies
                            </motion.span>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
