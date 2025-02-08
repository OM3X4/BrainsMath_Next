/* eslint-disable */
import React from 'react';
import { ProgressBase } from './ProgressBase';
import Link from 'next/link';

function Lessons() {
    return (
    <>
        <h1 className='text-center text-6xl font-Mono text-navy mb-5'>Learning Plan</h1>
        {/* stats */}
        <div className='flex items- justify-start w-[80%] mx-auto gap-3 mb-10'>
            <h1 className='font-Mono'><span className='font-bold'>81%</span> Progress</h1>
            <h1 className='font-Mono'><span className='font-bold'>1578</span> Stars</h1>
        </div>
        {/* Main */}
        <div className=' w-[80%] mx-auto'>
            {
                ProgressBase.map((category) => {
                    return(
                        <div className='my-5'>
                            <h1 className='font-Mono text-2xl mb-5'>{category.name}</h1>
                            <div className='flex gap-6'>
                                {
                                    category.lessons.map((item) => {
                                        return(
                                            <Link href={item.link}>
                                                <div className='size-44 border-2 border-navy rounded-xl py-3 px-4 hover:scale-110 transition-all cursor-pointer flex flex-col justify-around hover:bg-navy group'>
                                                    <h1 className='font-Mono text-4xl group-hover:text-white transition-all'>{item.index}</h1>
                                                    <h1 className='self-center text-3xl font-semibold group-hover:text-white'>{item.img}</h1>
                                                    <h1 className='text-sm group-hover:text-white transition-all '>{item.name}</h1>
                                                </div>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </>
    );
}

export default Lessons;