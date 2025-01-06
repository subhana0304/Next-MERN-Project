import React from 'react'

export default function ExperiencedTeam() {
    return (
        <div className='px-16 my-20'>
            <h2 className='text-[54px] font-semibold'>Let our experienced team <br />
                elevate your digital goals</h2>
            <div className="px-2 grid grid-cols-2 mt-10">
                <div className='flex items-end'>
                    <div className="flex gap-10">
                        <div className='text-center'>
                            <h1 className='text-[54px] font-semibold'>250</h1>
                            <p className='text-[24px] mt-5'>Five-Star Reviews</p>
                        </div>
                        <div className='text-center ps-10'>
                            <h1 className='text-[54px] font-semibold'>10</h1>
                            <p className='text-[24px] mt-5'>In-House Experts</p>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <p className='text-[24px]'>We have successfully completed over 300+ <br />
                        projects from a variety of industries. In our team, <br />
                        designers work alongside developers and digital <br />
                        strategists, we believe this is our winning recipe for <br />
                        creating digital products that make an impact.</p>
                </div>
            </div>
        </div>
    )
}
