/* eslint-disable prettier/prettier */
"use client"

import React from "react";
import { motion } from "framer-motion";

const AnimatedTextWord = ({ text, className } : { text : string, className ?: string }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      animate="visible"
      className={className}
      initial="hidden"
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      variants={container}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          style={{ marginRight: "5px" }}
          variants={child}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextWord;