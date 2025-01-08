'use client'

import { useState, useEffect } from 'react'

export default function PreLoader() {
    const [loading, setLoading] = useState(true)
    const [hide, setHide] = useState(false) // State to trigger the animation

    useEffect(() => {
        // Simulate loading time - replace with your actual loading logic
        const timer = setTimeout(() => {
            setHide(true) // Start the animation
            setTimeout(() => setLoading(false), 1000) // Wait for the animation to complete before removing
        }, 2000) // 2 seconds to show the animation

        return () => clearTimeout(timer)
    }, [])

    if (!loading) return null

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-transform duration-1000 ${
                hide ? 'translate-x-full' : 'translate-x-0'
            }`}
        >
            {/* Center Logo */}
            <div className="text-white text-6xl font-bold tracking-tighter">
                <svg
                    id="logo"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64.06 32"
                    className="animate-logo"
                    style={{ width: "60px", height: "30px" }} // Adjust size as needed
                >
                    <rect id="line1" x="12.31" width="6.78" height="32" fill="white" />
                    <polygon id="angle1" points="0 32 6.78 32 12.31 0 5.53 0 0 32" fill="white" />
                    <rect id="line2" x="25.88" width="6.78" height="32" fill="white" />
                    <polygon id="angle2" points="32.66 32 39.44 32 44.97 0 38.19 0 32.66 32" fill="white" />
                    <rect id="line3" x="44.97" width="6.78" height="32" fill="white" />
                    <polygon id="angle3" points="57.28 0 51.75 32 58.53 32 64.06 0 57.28 0" fill="white" />
                </svg>
            </div>
        </div>
    )
}
