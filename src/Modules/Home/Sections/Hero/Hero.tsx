/* eslint-disable prettier/prettier */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "@nextui-org/link";

import { fadeUpSpring } from "@/src/config/motion";
import { Highlight } from "@/src/components/UI/Aceternity/hero-highlight";
import Button from "@/src/components/Button";

const Hero = () => {
  return (
    <>
      <motion.div className="overflow-hidden ">
        <div className="pt-16 lg:relative text-center">
          <section className="mx-auto items-center xl:gap-x-16 container">
            <div className="relative col-span-2 z-10 md:text-center lg:text-left !mt-[-20px] ">

              <div className="relative text-lg">
                👋 Hi, this is
                {/* <AnimatedTextWord
                  className="text-lg justify-center lg:justify-start"
                  text="👋 Hi, this is"
                /> */}
                <div>
                  <p className="!font-medium md:mb-4 !bg-clip-text !text-[2rem] !leading-normal md:!text-7xl md:!leading-[87px] justify-center lg:justify-start">Nirjhor Saha</p>
                  {/* <AnimatedTextCharacter
                    className="!font-medium md:mb-4 !bg-clip-text !text-[2rem] !leading-normal md:!text-7xl md:!leading-[87px] justify-center lg:justify-start"
                    text="Nirjhor Saha"
                  /> */}
                  <p className="font-medium text-sm sm:text-[1.6rem] tracking-normal md:text-[2rem] text-slate-500 mt-1 justify-center lg:justify-start md:gap-y-5 max-w-4xl">Jr.Software Engineer</p>
                  {/* <AnimatedTextCharacter
                    className="font-medium text-sm sm:text-[1.6rem] tracking-normal md:text-[2rem] text-slate-600 mt-1 justify-center lg:justify-start md:gap-y-5 max-w-4xl"
                    text="Jr.Software Engineer"
                  /> */}
                </div>

                <>
                  <div className="my-5 md:my-8 leading-7 md:text-lg max-w-5xl">
                    {/* <AnimatedTextWord
                      className="text-sm sm:text-lg justify-center lg:justify-start"
                      text="Who transform complexity into user-friendly solutions with his skill and efficiency. Also highly motivated and very passionate Full Stack Developer with One years of experience in"
                    /> */}
                    Who transform complexity into user-friendly solutions with his skill and efficiency. Also highly motivated and very passionate Full Stack Developer with One years of experience in {''}
                    <Highlight className="text-black dark:text-white">
                      Next.js, React.js, TypeScript, MongoDB, Firebase, Express.js
                    </Highlight>
                    {/* Next js, React js, MongoDB, Express js, Node js, Firebase, Flutter */}
                  </div>
                </>
              </div>

              <motion.div
                animate="visible"
                className="w-fit mx-auto lg:ml-0"
                initial="hidden"
                variants={fadeUpSpring}
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
          </section>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
