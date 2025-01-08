"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const RunningText = () => {
  const sectionRef = useRef(null); // Reference to the section
  const { scrollYProgress } = useScroll({
    target: sectionRef, // Tracks scroll within this specific section
    offset: ["start end", "end start"], // Start when the section enters, end when it leaves
  });

  // Map scroll progress to horizontal movement
  const xTransform = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  return (
    <section
      ref={sectionRef}
      className="running-text flex items-center justify-center overflow-hidden ps-96 mt-20 mb-60"
    >
      <motion.span
        className="h1 text-[119px] font-bold whitespace-nowrap ms-40 ps-40"
        style={{ x: xTransform }} // Apply horizontal movement
      >
        Elevate your digital presence
      </motion.span>
    </section>
  );
};

export default RunningText;
