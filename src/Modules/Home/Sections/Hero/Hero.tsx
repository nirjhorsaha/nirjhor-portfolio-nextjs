/* eslint-disable prettier/prettier */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "@nextui-org/link";

import { Highlight } from "@/src/components/UI/Aceternity/hero-highlight";
import Button from "@/src/components/Button";

const Hero = () => {
  return (
    <section className="container lg:my-8" id="_home">
      <div className="my-20">
        <div className=" relative  text-center lg:text-left">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="relative text-xl "
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}>

            <p>👋 Hi, this is</p>

            <div>
              <motion.p
                animate={{ opacity: 1, y: 0 }}
                className="!font-medium md:mb-4 !bg-clip-text !text-[2rem] !leading-relaxed md:!text-7xl md:!leading-[87px] justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}>Nirjhor Saha</motion.p>

              <motion.p
                animate={{ opacity: 1, y: 0 }}
                className="font-medium text-base tracking-wider md:text-[2rem] text-slate-500 justify-center lg:justify-start md:gap-y-5 max-w-4xl"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}>Jr.Software Engineer</motion.p>
            </div>

            <>
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="my-5 md:my-8 leading-relaxed md:text-lg max-w-5xl text-justify "
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Who transform complexity into user-friendly solutions with his skill and efficiency. Also highly motivated and very passionate Full Stack Developer with One and half years of experience in {''}
                <Highlight className="text-black dark:text-white">
                  TypeScript, Next.js, React.js, MongoDB, Firebase, Express.js
                </Highlight>
              </motion.div>


            </>
          </motion.div>

          {/* resume button */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="w-fit mx-auto lg:ml-0"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link
              href="https://drive.google.com/file/d/1cGV7ye3nMqtVhEaMGj-UfPaWmLnqVGKB/view?usp=drive_link"
              rel="noreferrer"
              target="_blank"
            >
              <Button label="Resume" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;