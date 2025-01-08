"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export default function ImgSection() {
    const [height, setHeight] = useState(600); // Initial height set to 600px
    const [lastScrollY, setLastScrollY] = useState(0); // Store the last scroll position

    useEffect(() => {
        const handleScroll = () => {
            // Get current scroll position
            const currentScrollY = window.scrollY;

            // If scrolling down, increase the height to 750px
            if (currentScrollY > lastScrollY && height === 600) {
                setHeight(750);
            }

            // If scrolling up, decrease the height to 600px
            if (currentScrollY < lastScrollY && height === 750) {
                setHeight(600);
            }

            // Update the last scroll position
            setLastScrollY(currentScrollY);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [height, lastScrollY]);

    return (
        <div className="img-section px-16">
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: `${height}px`, // Dynamic height based on scroll position
                    overflow: 'hidden',
                    borderRadius: '20px',
                    transition: 'height 0.8s ease', // Smooth transition for height change
                }}
            >
                <Image
                    src="/images/imageBig.jpg" // Direct path to the image in the public folder
                    alt="BigImage"
                    fill // Makes the image responsive (replaces the need for width & height)
                    style={{
                        objectFit: 'cover',
                        borderRadius: '20px',
                        zIndex:'-1'
                    }}
                />
            </div>
        </div>
    );
}
