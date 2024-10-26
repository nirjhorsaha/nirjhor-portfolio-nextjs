/* eslint-disable prettier/prettier */
import { motion } from 'framer-motion';
import { Code } from '@nextui-org/code';
import { IoMdArrowDropright } from 'react-icons/io';
import { useEffect, useRef, useState } from 'react'; // Import necessary hooks

import { skills } from '@/src/config/skills';

const Skills = () => {
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
        <div ref={sectionRef} className='mt-12 md:mt-6'>
            <motion.p
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate based on visibility
                className='flex items-start text-2xl'
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <span className='mr-2'>
                    <IoMdArrowDropright className='text-sky-400 leading-6 md:text-base' size={25} />
                </span>
                Technical Proficiencies
            </motion.p>

            <motion.p
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate based on visibility
                className='my-5 dark:text-slate-400 leading-relaxed md:text-base tracking-wide text-justify lg:tracking-tighte'
            
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                I have developed a wide range of technical skills, demonstrating strong expertise in web development technologies, programming languages, and frameworks. My background in both front-end and back-end development allows me to take a comprehensive approach, ensuring the delivery of reliable and scalable applications.
            </motion.p>

            <div className='__skills md:w-full'>
                {/* Animated Skills List */}
                <motion.ul
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate based on visibility
                    className='flex flex-wrap gap-2'
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    {skills.map((skill, i) => (
                        <motion.li
                            key={i}
                            animate={isVisible ? { opacity: 1 } : { opacity: 0 }} // Animate based on visibility
                            className='gap-2 flex items-center transition-all duration-300 hover:translate-x-[7px] select-none'
                            initial={{ opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 + i * 0.2 }}
                        >
                            <Code className='px-4 flex gap-2 py-2 justify-center items-center text-base'>
                                <span className='text-sky-400'>{skill.icon}</span> {skill.name}
                            </Code>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </div>
    );
};

export default Skills;
