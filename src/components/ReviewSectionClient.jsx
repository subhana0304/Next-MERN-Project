'use client'
import Image from 'next/image'
import { motion } from "framer-motion"
import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

export default function ReviewSectionClient({ reviews }) {
    const { data: session, status } = useSession();
    const scrollRef = useRef(null)
    const [visibleItems, setVisibleItems] = useState([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = entry.target.dataset.index;
                    if (entry.isIntersecting) {
                        setVisibleItems((prev) => [...new Set([...prev, index])])
                    } else {
                        setVisibleItems((prev) => prev.filter((item) => item !== index))
                    }
                })
            },
            { threshold: 0.5 }
        )

        const items = scrollRef.current.querySelectorAll('.testimonial-card')
        items.forEach((item) => observer.observe(item))

        return () => {
            items.forEach((item) => observer.unobserve(item))
        }
    }, [])

    return (
        <section className="bg-gradient-left bg-black px-16 py-20">
            <div className="container mx-auto px-2">
                <div className="">
                    <div className="mt-16">
                        {/* Testimonial Scrolling Section */}
                        <div
                            ref={scrollRef}
                            className="scroll-section h-[500px] w-full overflow-y-scroll p-16 rounded-lg scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-800 custom-scrollbar"
                        >
                            <h2 className="mb-6 text-4xl font-bold text-white md:text-6xl">
                                Client Feedback
                            </h2>
                            <div className='loader flex justify-between'>
                                <div>
                                    <p className="text-[24px] text-white">
                                        We're collaborators - We build tight-knit partnerships with our clients.
                                    </p>
                                </div>
                                <div className="hidden items-center gap-2 text-3xl text-gray-400 md:flex text-end">
                                    <div className="h-10 w-10 animate-spin rounded-full border-2 border-gray-400 border-t-transparent" />
                                    Keep scrolling
                                </div>
                            </div>
                            {reviews.map((review, index) => (
                                <div
                                    key={review._id}
                                    data-index={index}
                                    className={`testimonial-card flex flex-col items-start justify-center mt-20 p-8 mb-6 border rounded-3xl border-gray-600 transition-transform duration-500 ${visibleItems.includes(index.toString())
                                            ? 'animate-zoom-in-up'
                                            : 'animate-zoom-out-down'
                                        }`}
                                    style={{
                                        height: '500px',
                                        scrollSnapAlign: 'start',
                                    }}
                                >
                                    <blockquote className="mb-4 text-[31px] font-semibold text-white">
                                        {review.quote}
                                    </blockquote>
                                    <div className="flex items-center justify-between w-full">
                                        <div className="flex items-center gap-4">
                                            <Image
                                                className="rounded-full"
                                                src={review.image}
                                                alt={review.author}
                                                width={70}
                                                height={70}
                                            />
                                            <div className="text-gray-400 text-[23px]">{review.author}</div>
                                        </div>
                                        <div className="text-blue-400 text-[24px]">{review.company}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 text-center">
                            {status === 'authenticated' ?
                                (<>
                                    <Link href={"/CreateReview"}>
                                        <button className="rounded-full border-[#545cFf] border text-center text-[#5456ff] overflow-hidden px-7 py-4">
                                            <motion.span
                                                initial={{ y: 0 }}
                                                whileHover={{ y: ["130%", "0%"] }}
                                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                                className="block text-[24px] font-medium"
                                            >
                                                Create New Review
                                            </motion.span>
                                        </button>
                                    </Link> </>) : (<><span></span></>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
