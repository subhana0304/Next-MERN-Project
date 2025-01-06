'use client'
import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'

const testimonials = [
    {
        quote: "We have worked with Artistsweb to build a complete new website with quite complex connections with our CRM and accounting functions. The end product is brilliant, a really first class blend of design and functionality and the speed and depth of understanding about our business was remarkable. I'd highly recommend them.",
        author: "Steven Glibbery",
        company: "TGA Mobility",
        image: "https://d3aj5vjnhssdu4.cloudfront.net/wp-content/uploads/tga-logo-250x250.jpg"
    },
    {
        quote: "Artistsweb built our new website and it has been an absolute pleasure working with the whole team. Excellent communication and they built us just an incredible looking website.",
        author: "Nathan Smith",
        company: "Tech SuperPowers",
        image: "https://d3aj5vjnhssdu4.cloudfront.net/wp-content/uploads/nathan-s-250x250.jpg"
    },
    {
        quote: "Artistsweb are a great team of professionals to work with. They listened to our requirements very closely and delivered complex solutions with detail and outstanding creativity and more importantly to deadlines other agencies could not previously meet. We would highly recommend them to any corporation looking for a talented team of digital strategists, designers and developers.",
        author: "David Cortes",
        company: "Costa Coffee",
        image: "https://d3aj5vjnhssdu4.cloudfront.net/wp-content/uploads/costa-coffee-250x250.jpg"
    },
    {
        quote: "In the years we've worked with Artistsweb, they have consistently been a solid, reliable, dedicated and effective partner. We value greatly their capacity to work quickly and the advice that they give us. Their knowledge and development skillset is unrivalled compared to other digital agencies we've worked with and we shall continue to collaborate with them undoubtedly, for many years to come.",
        author: "Oliver Cripps",
        company: "Media Tree",
        image: "https://d3aj5vjnhssdu4.cloudfront.net/wp-content/uploads/mediatree-250x250.jpg"
    },
    {
        quote: "I had the absolute privilege of working with this wonderful team. The work they presented for my webpage was exactly what I had in mind. They are a team of talented artists who understood the concept and managed to deliver exactly what I was looking for. You don't need to look any further if you're looking for quality, professionalism, and a total artistic perspective. These guys are amazing! I won't leave them.",
        author: "Fortunato Angelini",
        company: "Re-Core Pilates",
        image: "https://d3aj5vjnhssdu4.cloudfront.net/wp-content/uploads/website-design-agency-london-250x250.jpeg"
    }
]

export default function Testimonial() {
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
                <div className="mb-16">
                    <div className="mt-16">
                        {/* Testimonial Scrolling Section */}
                        <div
                            ref={scrollRef}
                            className="h-[500px] w-full overflow-y-scroll p-16 rounded-lg scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-800 custom-scrollbar"
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
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={testimonial.author}
                                    data-index={index}
                                    className={`testimonial-card flex flex-col items-start justify-center mt-20 p-8 mb-6 border rounded-3xl border-gray-600 transition-transform duration-500 ${
                                        visibleItems.includes(index.toString())
                                            ? 'animate-zoom-in-up'
                                            : 'animate-zoom-out-down'
                                    }`}
                                    style={{
                                        height: '500px',
                                        scrollSnapAlign: 'start',
                                    }}
                                >
                                    <blockquote className="mb-4 text-[31px] font-semibold text-white">
                                        {testimonial.quote}
                                    </blockquote>
                                    <div className="flex items-center justify-between w-full">
                                        <div className="flex items-center gap-4">
                                            <Image
                                                className="rounded-full"
                                                src={testimonial.image}
                                                alt={testimonial.author}
                                                width={70}
                                                height={70}
                                            />
                                            <div className="text-gray-400 text-[23px]">{testimonial.author}</div>
                                        </div>
                                        <div className="text-blue-400 text-[24px]">{testimonial.company}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
