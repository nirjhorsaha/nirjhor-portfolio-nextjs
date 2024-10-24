/* eslint-disable prettier/prettier */
import { Link } from '@nextui-org/link';
import { IoMdArrowDropright } from 'react-icons/io';

import { experienceData } from './config/constants';

import { Timeline } from '@/src/components/UI/Aceternity/timeline';
import { GradualSpacing } from '@/src/components/UI/MagicUI/GradualSpacing';
import { Experience } from '@/src/config/types';

// ExperienceItem Component 
const ExperienceItem: React.FC<Experience> = ({ title, company, period, responsibilities }) => (
  <div>
    <h1 className="text-xl font-medium text-slate-300">
      {title} {''}
      <Link
        className="text-sky-300 border-b border-b-sky-300 border-dotted"
        href={company.url}
        target="_blank"
      >
        {""} @{company.name}
      </Link>
    </h1>
    <p className="text-slate-400 font-medium mt-1">{period}</p>
    <ul className="space-y-5 mt-5 max-w-xl">
      {responsibilities.map((item, index) => (
        <li key={index} className="gap-1 flex text-slate-400 select-none">
          <span className="min-w-10">
            <IoMdArrowDropright className="text-sky-400 text-[1.3rem]" />
          </span>
          <p>{item}</p>
        </li>
      ))}
    </ul>
  </div>
);

const Worked = () => {
  return (
    <section className='container' id='experience'>
      <GradualSpacing
        className="text-lg md:text-5xl font-medium font-display -tracking-widest text-black dark:text-sky-400 md:leading-[5rem]"
        text="Changelog from my journey"
      />
      <div className="w-full">
        <Timeline
          data={experienceData.map((yearEntry) => ({
            title: yearEntry.year,
            content: (
              <div>
                {yearEntry.experiences.map((exp, index) => (
                  <ExperienceItem
                    key={index}
                    company={exp.company}
                    period={exp.period}
                    responsibilities={exp.responsibilities}
                    title={exp.title}
                  />
                ))}
              </div>
            ),
          }))}
        />
      </div>
    </section>
  );
};

export default Worked;
