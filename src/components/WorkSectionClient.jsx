'use client'

import { motion } from "framer-motion"
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import { useSession } from "next-auth/react"

export default function WorkSectionClient({ projects }) {
    const { data: session, status } = useSession();

    useEffect(() => {
        const header = document.querySelector('.header-section');
        const cards = document.querySelectorAll('.project-card');
        const container = document.querySelector('.scroll-container');

        const handleWheel = (e) => {
            if (!container) return;

            const isAtStart = container.scrollLeft === 0;
            const isAtEnd =
                Math.round(container.scrollLeft) >=
                container.scrollWidth - container.clientWidth;

            if (isAtStart && e.deltaY < 0) {
                // Allow vertical scrolling when at the start and scrolling up
                return;
            }

            if (isAtEnd && e.deltaY > 0) {
                // Allow vertical scrolling when at the end and scrolling down
                return;
            }

            // Prevent default vertical scrolling and scroll horizontally instead
            e.preventDefault();
            container.scrollBy({
                left: e.deltaY * 5,
                behavior: "smooth",
            });
        };

        const handleScroll = () => {
            if (header) {
                const rect = header.getBoundingClientRect();
                if (rect.top <= window.innerHeight) {
                    header.classList.add('animate-header');
                }
            }

            cards.forEach((card) => {
                const rect = card.getBoundingClientRect();
                if (rect.top <= window.innerHeight) {
                    card.classList.add('animate-card');
                }
            });
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);
        container?.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            container?.removeEventListener('wheel', handleWheel);
        };
    }, []);


    return (
        <section className="container mx-auto my-24 px-16">
            <div className="scroll-container flex overflow-x-auto gap-8 scroll-smooth pb-8 px-2">
                {/* Header Section */}
                <div className="header-section mb-12 relative transform opacity-0 transition-all duration-700 ease-out min-w-[600px]">
                    <div className="my-10">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <h2 className="text-6xl font-semibold tracking-tight">Work</h2>
                                <span className="inline-flex items-center justify-center w-14 h-14 text-[24px] font-medium rounded-full border border-gray-200">13</span>
                            </div>
                            <p className="text-[24px] text-muted-foreground max-w-2xl mb-8">
                                A selection of our crafted <br /> work, built from scratch by <br /> our talented in-house team.
                            </p>
                        </div>
                        <div>
                            <button className="rounded-full border-[#545cFf] border text-center overflow-hidden px-7 py-4">
                                <motion.span
                                    initial={{ y: 0 }}
                                    whileHover={{ y: ["130%", "0%"] }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                    className="block text-[24px] font-medium"
                                >
                                    Case Studies
                                </motion.span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Projects Section */}
                {projects.map((project) => (
                    <Link
                        href={project.link}
                        key={project._id}
                        className="project-card group flex-none w-[600px] h-[500px] opacity-0 transform translate-y-10 transition-all duration-700 ease-out"
                        aria-label={`View details of ${project.title}`}
                    >
                        <div className="overflow-hidden rounded-3xl h-full w-full">
                            <div className="relative h-full w-full">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    height={500}
                                    width={600}
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
                                <div className="absolute bottom-0 left-0 p-8">
                                    <h3 className="text-3xl font-semibold text-white mb-4">{project.title}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="bg-black/30 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                {project.isLatest && (
                                    <span
                                        className="absolute top-6 right-6 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium"
                                    >
                                        Latest
                                    </span>
                                )}
                            </div>
                        </div>
                    </Link>
                ))}

                {/* Footer Section */}
                <div className="footer flex items-center justify-center m-16">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-6">View More</h2>
                        {status === 'authenticated' ?
                            (<>
                                <Link href={"/CreateProject"}>
                                    <button className="rounded-full border-[#545cFf] border text-center overflow-hidden px-7 py-4">
                                        <motion.span
                                            initial={{ y: 0 }}
                                            whileHover={{ y: ["130%", "0%"] }}
                                            transition={{ duration: 1.5, ease: "easeInOut" }}
                                            className="block text-[24px] font-medium"
                                        >
                                            Create More

                                        </motion.span>
                                    </button>
                                </Link>
                            </>) :
                            (<>
                                <Link href={"#"}>
                                    <button className="rounded-full border-[#545cFf] border text-center overflow-hidden px-7 py-4">
                                        <motion.span
                                            initial={{ y: 0 }}
                                            whileHover={{ y: ["130%", "0%"] }}
                                            transition={{ duration: 1.5, ease: "easeInOut" }}
                                            className="block text-[24px] font-medium"
                                        >
                                            Case Study

                                        </motion.span>
                                    </button>
                                </Link>
                            </>)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
