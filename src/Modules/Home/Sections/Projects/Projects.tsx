/* eslint-disable prettier/prettier */
"use client";

import { Link } from "@nextui-org/link";
import { useEffect, useRef, useState } from "react";
import { PiGitBranchDuotone } from "react-icons/pi";

import { projects } from "@/src/config/constants";
import Featured from "@/src/components/cards/Project/Featured";
import { ProjectTypes } from "@/src/config/types";
import Button from "@/src/components/Button";
import { siteConfig } from "@/src/config/site";

const Projects = () => {
  const [visible, setVisible] = useState<boolean[]>(
    new Array(projects.length).fill(false),
  ); // Initialize with false
  const [buttonVisible, setButtonVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = (entry.target as HTMLElement).dataset.index;

          if (index) {
            const idx = parseInt(index);

            setVisible((prev) => {
              const newVisible = [...prev];

              newVisible[idx] = entry.isIntersecting; // Set visibility based on intersection

              return newVisible;
            });
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    const items =
      sectionRef.current?.querySelectorAll<HTMLElement>(".project-card");

    items?.forEach((item, index) => {
      const htmlElement = item as HTMLElement;

      htmlElement.dataset.index = index.toString();
      observer.observe(htmlElement);
    });

    return () => {
      items?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  // Button observer
  useEffect(() => {
    const buttonObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setButtonVisible(entry.isIntersecting); // Show/hide button based on intersection
        });
      },
      {
        threshold: 0.5,
      },
    );

    if (buttonRef.current) {
      buttonObserver.observe(buttonRef.current);
    }

    return () => {
      if (buttonRef.current) {
        buttonObserver.unobserve(buttonRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="container" id="projects">
      <p className="text-4xl md:text-5xl font-medium font-display text-black dark:text-sky-400 md:leading-[5rem]">
        Some Things I’ve Built
      </p>
      <p className="text-base mt-2">
        Take a Look at My Latest Work, Illustrating My Skills in Web Development
        and My Approach to Problem-Solving
      </p>

      <div className="space-y-20 mt-10">
        {projects
          .filter((e: ProjectTypes) => e.featured === true)
          .map((e: ProjectTypes, i: number) => (
            <div
              key={i}
              className={`project-card transition-opacity duration-700 transform ${
                visible[i]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <Featured {...e} secondary={i % 2 === 0 ? false : true} />
            </div>
          ))}
      </div>

      <div
        ref={buttonRef}
        className={`flex justify-center mt-10 transition-opacity duration-700 transform ${
          buttonVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <Link href={siteConfig.links.github} rel="noreferrer" target="_blank">
          <Button icon={<PiGitBranchDuotone />} label="View More Projects" />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
