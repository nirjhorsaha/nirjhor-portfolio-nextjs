/* eslint-disable prettier/prettier */
import { ProjectTypes } from "./types";

// Nav data
export const navData = ["About", "Experience", "Projects", "Contact"];

// Skills list
export const skills = [
    "Javascript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Redux",
    "MongoDB",
    "Firebase",
    "Node.js",
    "Express.js",
    "Flutter",
    "Dart",
];

// About content
export const aboutContent = [
    "Welcome to my profile! I'm Nirjhor Saha, a fullstack developer with expertise in the MERN stack. Experienced in implementing responsive design principles to ensure seamless functionality across multiple devices and platforms. My mission is to transform ideas into visually stunning and user-friendly web applications.",
    "As a continuous learner, I stay up to date with the latest trends. I constantly explore new frameworks, libraries, and tools to enhance my skills and broaden my technical expertise.",
    "My aspiration is to make a significant impact in the field of software engineering by continuously expanding my skill set and staying abreast of emerging technologies. I aim to contribute to the development of innovative and user-centric web applications, driving business growth and delivering exceptional experiences to end-users.",
    "Here are a few technologies I have been working with recently:",
];

// Project data
export const projects: ProjectTypes[] = [
    {
        num: "01",
        title: "Nexus Reserve",
        description:
            "A platform that facilitates easy booking of meeting rooms in co-working spaces",
        tech: ["React.js", "TypeScript", "RTK", "Express.js", "Mongoose"],
        code: "https://github.com/nirjhorsaha/nexus-reserve.git",
        live: "https://nexus-reserve.vercel.app/",
        thumnail: "NexusReserve.png",
        featured: true,
    },
    {
        num: "02",
        title: "Mech Archade",
        description:
            "A platform for exploring and purchasing high-quality mechanical keyboards tailored for gamers, developers, and productivity enthusiasts.",
        tech: ["React.js", "TypeScript", "RTK", "Express.js", "Mongoose"],
        code: "https://github.com/nirjhorsaha/mechArcade-frontend.git",
        live: "https://mech-arcade-seven.vercel.app/",
        thumnail: "MechArchade.png",
        featured: true,
    },
    {
        num: "03",
        title: "Camp All Star",
        description:
            "Full-stack school website. Basically, it is a summer camp school that allows students to enroll and learn specific extra-curricular activities.",
        tech: ["React.js", "Tailwind CSS", "Express.js", "MongoDB"],
        code: "https://github.com/nirjhorsaha/camp-all-star",
        live: "https://camp-all-star.web.app/",
        thumnail: "CampAllStar1.png",
    },
    // {
    //     title: "Toy World",
    //     description:
    //         "Full-stack Toy Marketplace website. Where a valid user can added toys in this marketplace. Also he/she can modified or deleted toys.",
    //     tech: ["React js", "Tailwind CSS", "Firebase", "Express js"],
    //     code: "https://github.com/nirjhorsaha/Toy-World",
    //     live: "https://toy-world-674f3.web.app/",
    //     thumnail: "ToyWorld.png",
    // },
    // {
    //     title: "Aspiring Chef",
    //     description: "Responsive single page Chef Recipe website",
    //     tech: ["React js", "Firebase"],
    //     code: "https://github.com/nirjhorsaha/chefs-client-side",
    //     live: "https://aspiring-chef-client.web.app/",
    //     thumnail: "AspirantChef.png",
    // },
    // {
    //     title : "Job Hunt",
    //     description : "Job Portal website",
    //     tech : [ "React js" ],
    //     code : 'https://github.com/nirjhorsaha/Job_Hunt',
    //     live : 'https://job-hero.netlify.app/',
    //     thumnail : "CareerHub.png"
    // },

    // {
    //     title : "AI Hub",
    //     description : "Simple AI Universe using js",
    //     tech : [ "Javascript" ],
    //     code : 'https://github.com/nirjhorsaha/AI-Hub',
    //     live : 'https://todays-ai-hub.netlify.app/',
    //     thumnail : "HubUniverse.png"
    // },
];
