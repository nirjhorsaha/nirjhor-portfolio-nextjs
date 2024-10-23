/* eslint-disable prettier/prettier */
"use client"

// import Featured from "@components/cards/Project/Featured";
// import ProjectCard from "@components/cards/Project/ProjectCard";

import { Link } from "@nextui-org/link";
import { motion } from "framer-motion";
import { PiGitBranchDuotone } from "react-icons/pi";

import { projects } from "@/src/config/constants";
import { fadeLeft, fadeTop, fadeUpSpring, motionStep } from "@/src/config/motion";
import Featured from "@/src/components/cards/Project/Featured";
import { ProjectTypes } from "@/src/config/types";
import Button from "@/src/components/Button";
import { siteConfig } from "@/src/config/site";



const Projects = () => {
  return (
    <div className="container" id="projects">
      <motion.h1
        variants={fadeLeft}
        {...motionStep}
        className="flex items-center gap-2 text-lg md:text-3xl font-medium text-slate-300 mb-12"
      >
        <span className="text-sky-400 font-mono">03. </span>
        Some Things I’ve Built
      </motion.h1>

      <div className="space-y-20">
        {projects
          .filter((e: ProjectTypes) => e.featured == true)
          .map((e: ProjectTypes, i: number) => (
            <motion.div key={i} variants={fadeTop} {...motionStep}>
              <Featured {...e} secondary={i % 2 === 0 ? false : true} />
            </motion.div>
          ))}
      </div>
      <motion.div
        animate="visible"
        className="flex justify-center mt-10"
        initial="hidden"
        variants={fadeUpSpring}
      >
        <Link
          href={siteConfig.links.github}
          rel="noreferrer"
          target="_blank"
        >
          <Button icon={<PiGitBranchDuotone />} label="View More Projects" />
        </Link>
      </motion.div>
    </div>

  );
};

export default Projects;




{/* <div className="flex flex-col xl:flex-row xl:gap-[30px]">
<div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
  <div className="text-8xl leading-none font-extrabold text-outline">
    {project.num}
  </div>
  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transation-all duration-500 capitalize">{project.title}</h2>
  <h2 className="text-white/60">{project.description}</h2>
  {
    <ul className="flex gap-2">
      {project.tech.map((item, index) => {
        return (
          <li key={index} className="text-xl">{item}

            {index !== project.tech.length - 1 && ","} {/* remove last comma */}
//       </li>
//     )
//   })
//   }
// </ul>
//   }
//   <div>
//     <div className='flex justify-start mt-5 gap-3 text-slate-300' >
//       {project.live && <Link className='hover:text-sky-400 transition-all duration-300 hover:scale-110 text-2xl' href={`${project.live}`} target='_blank' >
//         <HiOutlineExternalLink />
//       </Link>}

//       {project.code && <Link className='hover:text-sky-400 transition-all duration-300 hover:scale-90 text-[1.2rem]' href={`${project.code}`} target='_blank' >
//         <FiGithub />
//       </Link>}
//     </div>
//   </div>

// </div>

{/* <div className="w-full xl:w-[50%]">
  <div className=" relative w-full h-full">
    <Image
      alt='loading...'
      className='transition-all duration-300 group-hover:scale-110 '
      layout='fill'
      objectFit='cover'
      quality={100}
      src={`/images/projects/${project.thumnail}`}
    />
  </div>
</div>
</div> */} 
