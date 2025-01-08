'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils'
import { motion } from "framer-motion";
import { useSession, signOut } from 'next-auth/react';

export default function Navbar() {
    const { data: session, status } = useSession();


    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
        // Prevent scrolling when menu is open
        document.body.style.overflow = !isOpen ? 'hidden' : 'unset'
    }
        const [prevScrollPos, setPrevScrollPos] = useState(0);
        const [visible, setVisible] = useState(true);

        useEffect(() => {
            const handleScroll = () => {
                const currentScrollPos = window.scrollY;
                setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
                setPrevScrollPos(currentScrollPos);
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, [prevScrollPos]);

        return (
            <>
                <nav className={cn(
                    "fixed top-0 w-full bg-white/75 backdrop-blur-md py-3 transition-all duration-300",
                    visible ? 'translate-y-0' : '-translate-y-full'
                )}>
                    <div className="flex justify-between items-center px-6 py-4">
                        <div className='ms-12'>
                            <Link href="/" className="text-2xl font-bold">
                                <svg
                                    id="logo"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 64.06 32"
                                    style={{ width: "60px", height: "30px" }} // Adjust size as needed
                                >
                                    <rect id="line1" x="12.31" width="6.78" height="32" />
                                    <polygon id="angle1" points="0 32 6.78 32 12.31 0 5.53 0 0 32" />
                                    <rect id="line2" x="25.88" width="6.78" height="32" />
                                    <polygon id="angle2" points="32.66 32 39.44 32 44.97 0 38.19 0 32.66 32" />
                                    <rect id="line3" x="44.97" width="6.78" height="32" />
                                    <polygon id="angle3" points="57.28 0 51.75 32 58.53 32 64.06 0 57.28 0" />
                                </svg>
                            </Link>
                        </div>
                        <div className='me-12'>
                            <div className="flex items-center gap-4">
                                {status === 'authenticated' ? (
                                    <>
                                        <p className="text-gray-700">Welcome, {session.user.email}</p>
                                        <button
                                            onClick={() => signOut()}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            LogOut
                                        </button>
                                    </>
                                ) : (
                                    <button>
                                        <Link href="/api/auth/signin">Login</Link>
                                    </button>
                                )}

                                <button className="rounded-full border border-[#545cFf] px-6 py-2 text-sm text-gray-700 transition-colors">
                                    <motion.span
                                        initial={{ y: 0 }} // Start position
                                        whileHover={{ y: ["80%", "0%"] }} // Refined keyframes
                                        transition={{ duration: 1, ease: "easeInOut" }} // Smooth and continuous
                                        className="block text-[16px] font-medium"
                                    >
                                        Get in touch
                                    </motion.span>
                                </button>
                                <button
                                    onClick={toggleMenu}
                                    className="flex items-center justify-center rounded-full p-2 border border-gray-600"
                                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                                >
                                    <motion.span
                                        initial={{ y: 0 }} // Start position
                                        whileHover={{ y: ["80%", "0%"] }} // Refined keyframes
                                        transition={{ duration: 1, ease: "easeInOut" }} // Smooth and continuous
                                        className="block"
                                    >
                                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                                    </motion.span>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Navigation Menu Overlay */}
                <div
                    className={cn(
                        'fixed inset-0 z-50 transform bg-black/60 backdrop-blur-sm transition-all duration-500',
                        isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
                    )}
                    onClick={toggleMenu}
                />

                {/* Navigation Menu Panel */}
                <div
                    className={cn(
                        'fixed left-1/2 rounded-3xl z-50 h-full w-full max-w-[90%] max-h-[90%] -translate-x-1/2 transform bg-black p-6 text-white transition-transform duration-500 md:max-w-[800px]',
                        isOpen ? 'translate-y-0 mt-10' : '-translate-y-full'
                    )}
                >
                    <div className="flex h-full flex-col p-10">
                        <div className="flex items-center justify-between">
                            <span className="text-[24px] font-light">Navigation</span>
                            <button
                                onClick={toggleMenu}
                                className="rounded-full p-2 hover:bg-white/10"
                                aria-label="Close menu"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <nav className="mt-12 space-y-6">
                            <Link
                                href="/case-studies"
                                className="flex items-center text-4xl font-light hover:text-gray-300"
                                onClick={toggleMenu}
                            >
                                <motion.span
                                    initial={{ y: 0 }} // Start position
                                    whileHover={{ y: ["80%", "0%"] }} // Refined keyframes
                                    transition={{ duration: 1, ease: "easeInOut" }} // Smooth and continuous
                                    className="block"
                                >
                                    Case Studies
                                </motion.span>
                                <span className="rounded-full ms-5 border border-white p-3  font-bold">13</span>
                            </Link>
                            {['Our Agency', 'Contact Us', 'News'].map((item) => (
                                <Link
                                    key={item}
                                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                                    className="block text-4xl font-light hover:text-gray-300"
                                    onClick={toggleMenu}
                                >
                                    <motion.span
                                        initial={{ y: 0 }} // Start position
                                        whileHover={{ y: ["80%", "0%"] }} // Refined keyframes
                                        transition={{ duration: 1, ease: "easeInOut" }} // Smooth and continuous
                                        className="block"
                                    >
                                        {item}
                                    </motion.span>
                                </Link>
                            ))}
                        </nav>

                        {/* Social Links and CTA */}
                        <div className="mt-auto space-y-8 flex justify-between items-center">
                            <div className="space-y-4">
                                <p className="text-sm font-light">Follow us</p>
                                <div className="flex gap-6 text-sm">
                                    {['Instagram', 'Facebook', 'Twitter', 'Awwwards'].map((social) => (
                                        <Link
                                            key={social}
                                            href={`https://${social.toLowerCase()}.com`}
                                            className="hover:text-gray-300"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {social}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <button className="relative rounded-full bg-[#545cFf] px-6 py-3 text-center overflow-hidden">
                                <motion.span
                                    initial={{ y: 0 }} // Start position
                                    whileHover={{ y: ["130%", "0%"] }} // Refined keyframes
                                    transition={{ duration: 1.5, ease: "easeInOut" }} // Smooth and continuous
                                    className="block"
                                >
                                    Get in touch
                                </motion.span>
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
