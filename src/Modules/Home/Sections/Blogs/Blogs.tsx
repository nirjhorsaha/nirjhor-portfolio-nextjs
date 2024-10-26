/* eslint-disable prettier/prettier */

import { IoIosArrowDropright, IoIosArrowDropleft, IoMdArrowForward } from "react-icons/io";
import { useState } from "react";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";

import Button from "@/src/components/Button";

const Blogs = () => {
    const blogContent = [
        {
            title: "Building Scalable Applications with Next.js",
            description:
                "Discover how to leverage Next.js for building scalable and high-performance web applications with ease.",
            img: "https://i.ibb.co/JQFWtv0/nextjs-Image.png",
            date: "Oct 15, 2024",
            link: "/blogs/nextjs-scalable-applications",
        },
        {
            title: "Simplifying Data Validation with Zod",
            description:
                "Learn how to effectively use Zod for schema validation and ensure data integrity in your applications.",
            img: "https://i.ibb.co/QjRpYXv/zod-Validation.jpg",
            date: "Oct 20, 2024",
            link: "/blogs/simplifying-data-validation",
        },
        {
            title: "State Management Made Easy with Redux and TanStack",
            description:
                "Unlock the power of Redux combined with TanStack for streamlined state management in your React applications.",
            img: "https://i.ibb.co/9vGj2mH/React-VSTanstack.png",
            date: "Oct 25, 2024",
            link: "/blogs/state-management-redux-tanstack",
        },
        {
            title: "Getting Started with Docker: Containerization Basics",
            description:
                "A comprehensive guide to Docker, helping you understand containerization and improve your development process.",
            img: "https://i.ibb.co/PQ3xBsB/docker.png",
            date: "Oct 30, 2024",
            link: "/blogs/getting-started-with-docker",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(blogContent.length / 2));
    };

    const handlePrev = () => {
        setCurrentSlide(
            (prev) =>
                (prev - 1 + Math.ceil(blogContent.length / 2)) %
                Math.ceil(blogContent.length / 2),
        );
    };

    const truncateDescription = (description: string) => {
        return description.length > 100
            ? description.slice(0, 100) + "..."
            : description;
    };

    return (
        <section className="container" id="blogs">
            <div className="mx-auto">
                <div className="flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-8">
                    <div className="w-full flex justify-between flex-col lg:w-2/5">
                        <div className="block lg:text-left text-center">
                            <h2 className="text-4xl md:text-5xl font-medium font-display mb-5 tracking-wide ">
                                My latest <span className="text-sky-400">blogs</span>
                            </h2>
                            <p className="text-gray-500 mb-10 tracking-wide leading-7 text-justify md:text-left ">
                                Discover my latest thoughts, insights, and tips in web
                                development and beyond. Dive into articles on coding practices,
                                design ideas, and the journey of a developer.
                            </p>
                            <Button icon={<IoMdArrowForward />} label="View More" />
                        </div>
                        <div className="flex lg:mt-0 gap-8">
                            <button aria-label="Previous Slide" onClick={handlePrev}>
                                <IoIosArrowDropleft
                                    className="transition-colors duration-200 ease-in-out dark:hover:text-sky-400"
                                    size={50}
                                />
                            </button>
                            <button aria-label="Next Slide" onClick={handleNext}>
                                <IoIosArrowDropright
                                    className="transition-colors duration-200 ease-in-out dark:hover:text-sky-400"
                                    size={50}
                                />
                            </button>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="grid grid-col-1 md:grid-cols-2 gap-4">
                            {blogContent
                                .slice(currentSlide * 2, currentSlide * 2 + 2)
                                .map((slide, index) => (
                                    <article
                                        key={index}
                                        className="w-full max-lg:max-w-xl group border cursor-pointer rounded-2xl p-4 transition-all duration-300 border-sky-400 "
                                    >
                                        <div className="flex items-center mb-6">
                                            <Image
                                                alt={`Blog post: ${slide.title}`}
                                                className="rounded-2xl w-full object-cover"
                                                loading="lazy"
                                                src={slide.img}
                                            />
                                        </div>
                                        <span className="text-slate-600 dark:text-sky-400 font-medium mb-3 block">
                                            {slide.date}
                                        </span>
                                        <h3 className="text-xl font-medium leading-8 mb-4 ">
                                            {slide.title}
                                        </h3>
                                        <p className="text-slate-400 leading-6 transition-all duration-500 mb-2">
                                            {truncateDescription(slide.description)}
                                            <Link
                                                className="text-sky-400 hover:underline"
                                                href={slide.link}
                                            >
                                                Read More
                                            </Link>
                                        </p>
                                    </article>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;
