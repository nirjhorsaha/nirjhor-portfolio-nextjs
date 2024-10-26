/* eslint-disable prettier/prettier */
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { aboutContent } from '@/src/config/constants';

const Left = () => {
  const [isVisible, setIsVisible] = useState(false); // State to control visibility
  const sectionRef = useRef<HTMLDivElement | null>(null); // Ref for the section

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Check if the entry is intersecting
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visibility to true when in view
        } else {
          setIsVisible(false); // Set visibility to false when out of view
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of the section is visible
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Start observing the section
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Clean up observer
      }
    };
  }, []);

  return (
    <div className='md:col-span-2 lg:col-span-3'>
      <div ref={sectionRef} className='space-y-4 dark:text-slate-400'>
        {/* Animated About Content with scroll animation */}
        {aboutContent.map((e: string, i: number) => (
          <motion.p
            key={i}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate based on visibility
            className='leading-relaxed text-base text-wrap  tracking-widest md:text-justify md:tracking-wider
            lg:text-justify lg:tracking-tighter'
            initial={{ opacity: 0, y: 20 }} // Initial state for the animation
            transition={{ duration: 0.7, delay: i * 0.2 }}
          >
            {e}
          </motion.p>
        ))}
      </div>
    </div>
  );
};

export default Left;
