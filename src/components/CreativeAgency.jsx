import Image from 'next/image'
import React from 'react'
import { BsArrowRight } from "react-icons/bs";

export default function CreativeAgency() {
    return (
        <div className='bg-black text-white bg-gradient-bottom px-16'>
            <div className='px-2 py-20'>
                <div className='mb-10'>
                    <h2 className='text-[24px] my-6'>Our team of experts can help you with...</h2>
                    <div>
                        <div className='e-commerce  flex items-center justify-between group'>
                            <h1 className='text-6xl font-semibold my-8 group-hover:duration-1000 group-hover:text-5xl'>E-commerce</h1>
                            <div className=' hidden group-hover:block'>
                                <div className='e-card flex items-center gap-8'>
                                    <div className='text-start'>
                                        <h5 className='text-16px text-gray-500 font-medium'>Latest Case Study</h5>
                                        <h4 className='text-[22px] text-white font-bold'>Alveena Casa</h4>
                                    </div>
                                    <div>
                                        <Image
                                            src="/images/01_Alveena_Casa_London_Web_Design_New-250x250.jpg"
                                            alt="Description of image"
                                            width={70}
                                            height={70}
                                            className='rounded-full'
                                        />
                                    </div>
                                    <div>
                                        <BsArrowRight className='text-white text-7xl' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='e-commerce  flex items-center justify-between group'>
                            <h1 className='text-6xl font-semibold my-8 group-hover:duration-1000 group-hover:text-5xl'>Website Design</h1>
                            <div className=' hidden group-hover:block'>
                                <div className='e-card flex items-center gap-8'>
                                    <div className='text-start'>
                                        <h5 className='text-16px text-gray-500 font-medium'>Latest Case Study</h5>
                                        <h4 className='text-[22px] text-white font-bold'>Romans & Partners</h4>
                                    </div>
                                    <div>
                                        <Image
                                            src="/images/01_Estate-Agency-Web-Design-London-250x250.jpg"
                                            alt="Description of image"
                                            width={70}
                                            height={70}
                                            className='rounded-full'
                                        />
                                    </div>
                                    <div>
                                        <BsArrowRight className='text-white text-7xl' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='e-commerce  flex items-center justify-between group'>
                            <h1 className='text-6xl font-semibold my-8 group-hover:duration-1000 group-hover:text-5xl'>Digital Products</h1>
                            <div className=' hidden group-hover:block'>
                                <div className='e-card flex items-center gap-8'>
                                    <div className='text-start'>
                                        <h5 className='text-16px text-gray-500 font-medium'>Latest Case Study</h5>
                                        <h4 className='text-[22px] text-white font-bold'>Fudli App</h4>
                                    </div>
                                    <div>
                                        <Image
                                            src="/images/Fudli-Restaurant-Food-Order-System-250x250.jpg"
                                            alt="Description of image"
                                            width={70}
                                            height={70}
                                            className='rounded-full'
                                        />
                                    </div>
                                    <div>
                                        <BsArrowRight className='text-white text-7xl' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='e-commerce  flex items-center justify-between group'>
                            <h1 className='text-6xl font-semibold my-8 group-hover:duration-1000 group-hover:text-5xl'>Brand Identities</h1>
                            <div className=' hidden group-hover:block'>
                                <div className='e-card flex items-center gap-8'>
                                    <div className='text-start'>
                                        <h5 className='text-16px text-gray-500 font-medium'>Latest Case Study</h5>
                                        <h4 className='text-[22px] text-white font-bold'>Learning Library</h4>
                                    </div>
                                    <div>
                                        <Image

                                            src="/images/learning_featured-image-250x250.jpeg"
                                            alt="Description of image"
                                            width={70}
                                            height={70}
                                            className='rounded-full'
                                        />
                                    </div>
                                    <div>
                                        <BsArrowRight className='text-white text-7xl' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='my-10'>
                    <div className="grid grid-cols-2">
                        <div>
                            <h2 className='text-[54px] font-semibold text-[#545cFf]'>Creative Agency</h2>
                            <p className='text-white text-[24px] pe-12 mt-5'>We’re an award-winning creative agency based in London, focused on E-Commerce, Web Design <br /> London, Digital Products, Branding and SEO.</p>
                        </div>
                        <div className='flex items-end gap-5 text-end justify-end'>
                            <button className='border border-[#545cff] text-white font-medium text-[24px] px-6 py-4 rounded-full'>300+ Projects</button>
                            <button className='border border-[#545cff] text-white font-medium text-[24px] px-6 py-4 rounded-full'>15 Awards</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

//  hidden group-hover:block