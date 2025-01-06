"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function GlobalCompanies() {
  // First and second sets of images
  const firstSet = [
    "/images/comp1.png",
    "/images/comp2.png",
    "/images/comp3.png",
    "/images/comp4.png",
    "/images/comp5.png",
  ];

  const secondSet = [
    "/images/comp6.png",
    "/images/comp7.png",
    "/images/comp8.png",
    "/images/comp9.png",
    "/images/comp10.png",
  ];

  // State to track the current set
  const [currentSetIndex, setCurrentSetIndex] = useState(0);

  // Combine sets into an array for easier toggling
  const sets = [firstSet, secondSet];

  // Handle set switching every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSetIndex((prevIndex) => (prevIndex + 1) % sets.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [sets.length]);

  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 50 }, // Start below
    visible: { opacity: 1, y: 0 }, // Slide into position
    exit: { opacity: 0, y: -50 }, // Move out above
  };

  return (
    <div className="px-16 my-20 overflow-hidden">
      <h1 className="text-[54px] text-[rgb(17, 17, 17)] font-semibold">
        From ambitious startups to global companies, <br />
        we partner with great businesses and <br />
        industry leaders.
      </h1>
      <div className="relative h-[140px] my-20">
        {/* AnimatePresence ensures smooth transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSetIndex} // Use currentSetIndex as a unique key
            className="grid grid-cols-5 text-center absolute w-full"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            transition={{ duration: 1 }} // Smooth animation
          >
            {sets[currentSetIndex].map((image, index) => (
              <div key={index} className="text-center">
                <Image
                  src={image}
                  alt={`Company logo ${index + 1}`}
                  width={200}
                  height={120}
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
