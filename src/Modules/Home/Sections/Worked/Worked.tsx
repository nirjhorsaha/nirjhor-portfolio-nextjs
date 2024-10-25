/* eslint-disable prettier/prettier */
import { Link } from '@nextui-org/link';
import { IoMdArrowDropright } from 'react-icons/io';
import { motion } from 'framer-motion'; // Import motion

import { experienceData } from './config/constants';

import { Timeline } from '@/src/components/UI/Aceternity/timeline';
import { Experience } from '@/src/config/types';

// Updated itemVariants for fade-in only
const itemVariants = {
  hidden: { opacity: 0 },
  visible: (index: any) => ({
    opacity: 1,
    transition: { duration: 0.5, delay: index * 0.3 },
  }),
};

// ExperienceItem Component
const ExperienceItem: React.FC<Experience & { index: number }> = ({ title, company, period, responsibilities, index }) => (
  <motion.div
    animate="visible"
    className="mb-6"
    custom={index}
    initial="hidden"
    variants={itemVariants}
  >
    <h1 className="text-xl font-medium text-slate-300">
      {title}{' '}
      <Link
        className="text-sky-300 border-b border-b-sky-300 border-dotted"
        href={company.url}
        target="_blank"
      >
        @{company.name}
      </Link>
    </h1>
    <p className="text-slate-400 font-medium mt-1">{period}</p>
    <ul className="space-y-5 mt-5 ">
      {responsibilities.map((item, respIndex) => (
        <li key={respIndex} className="gap-1 flex text-slate-400 select-none">
          <span className=" leading-6 md:text-base">
            <IoMdArrowDropright className="text-sky-400 text-[1.3rem]" />
          </span>
          <p>{item}</p>
        </li>
      ))}
    </ul>
  </motion.div>
);

// Timeline Component with animations
const AnimatedTimeline = () => {
  return (
    <section className='container' id='experience'>
      {/* <GradualSpacing
        className="text-xl md:text-5xl font-medium font-display -tracking-widest text-black dark:text-sky-400 md:leading-[5rem]"
        text="Changelog from my journey"
      /> */}
      <p className="text-4xl md:text-5xl font-medium font-display  text-black dark:text-sky-400 md:leading-[5rem]">
        Changelog from my journey</p>
      <p className='text-base mt-2'>Showcasing My Experiences and Insights</p>
      <div className="w-full">
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Timeline
            data={experienceData.map((yearEntry) => ({
              title: yearEntry.year,
              content: (
                <div>
                  {yearEntry.experiences.map((exp, index) => (
                    <ExperienceItem
                      key={index}
                      company={exp.company}
                      index={index} // Pass the index for per-item animations
                      period={exp.period}
                      responsibilities={exp.responsibilities}
                      title={exp.title}
                    />
                  ))}
                </div>
              ),
            }))}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedTimeline;
