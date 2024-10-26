/* eslint-disable prettier/prettier */
import { Link } from '@nextui-org/link';
import { IoMdArrowDropright } from 'react-icons/io';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { experienceData } from './config/constants';

import { Timeline } from '@/src/components/UI/Aceternity/timeline';
import { Experience } from '@/src/config/types';

// ExperienceItem Component
const ExperienceItem: React.FC<Experience & { index: number; isVisible: boolean }> = ({
  title,
  company,
  period,
  responsibilities,
  isVisible,
}) => (
  <motion.div
    animate={isVisible ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 20 }} // Animate to visible
    className="mb-6"
    initial={{ opacity: 0, translateY: 20 }} // Start with hidden and slightly translated
    transition={{ duration: 0.5 }}
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

// Timeline Component with scroll animations
const AnimatedTimeline = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(experienceData.flatMap(entry => entry.experiences).length).fill(false));
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]); // Ref for each item

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = (entry.target as HTMLElement).dataset.index;

        if (index) {
          setVisibleItems((prev) => {
            const newVisibleItems = [...prev];

            newVisibleItems[parseInt(index)] = entry.isIntersecting; // Update visibility

            return newVisibleItems;
          });
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of the item is visible
    });

    itemRefs.current.forEach((item) => {
      if (item) {
        observer.observe(item); // Observe each item
      }
    });

    return () => {
      itemRefs.current.forEach((item) => {
        if (item) {
          observer.unobserve(item); // Clean up observer
        }
      });
    };
  }, []);

  return (
    <section className='container' id='experience'>
      <p className="text-4xl md:text-5xl font-medium font-display text-black dark:text-sky-400 md:leading-[5rem]">
        Changelog from my journey
      </p>
      <p className='text-base mt-2'>Showcasing My Experiences and Insights</p>
      <div className="w-full">
        <Timeline
          data={experienceData.map((yearEntry, yearIndex) => ({
            title: yearEntry.year,
            content: (
              <div>
                {yearEntry.experiences.map((exp, index) => (
                  <div
                    key={index}
                    ref={(el) => { // Change this line
                      itemRefs.current[index + yearIndex * yearEntry.experiences.length] = el; // Assign ref without return
                    }}
                    data-index={index + yearIndex * yearEntry.experiences.length} // Unique index
                  >
                    <ExperienceItem
                      company={exp.company}
                      index={index}
                      isVisible={visibleItems[index + yearIndex * yearEntry.experiences.length]} // Pass visibility state
                      period={exp.period}
                      responsibilities={exp.responsibilities}
                      title={exp.title}
                    />
                  </div>
                ))}

              </div>
            ),
          }))}
        />
      </div>
    </section>
  );
};

export default AnimatedTimeline;
