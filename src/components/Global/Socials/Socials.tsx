/* eslint-disable prettier/prettier */
"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

import { socialData } from "./config/constans";
import { SocialTypes } from "./config/types";

const Socials = () => {
  return (
    <div
      className="fixed z-[999] bottom-0 left-[40px] hidden xl:block"
      id="__social"
    >
      <ul className="space-y-6 after:h-[90px] after:w-[1px] after:bg-slate-400 after:block after:mx-auto after:mt-6">
        {socialData.map((e: SocialTypes, i: number) => (
          <motion.li
            key={i}
            animate={{ opacity: 1, y: 0 }} 
            initial={{ opacity: 0, y: 10 }} 
            transition={{ duration: 0.4, delay: i * 0.2 }} 
          >
            <Link
              className="text-[22px] text-slate-600 dark:text-sky-400 hover:text-sky-600 cursor-pointer transition-all duration-300 hover:translate-y-[-10px]"
              href={e.url}
              target="_blank"
            >
              {<e.icon />}
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
