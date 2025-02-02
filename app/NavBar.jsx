/* eslint-disable */
'use client';
import { Data } from './Data/Collary';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function NavBar() {

    const router = useRouter();


    function handleStart() {
        let storage = localStorage.getItem("progress");
        if (storage) {
            let lesson = Data[parseInt(storage)];
            if (lesson.type == "practice") {
                router.push(`/practice?index=${storage}`);
            } else {
                router.push(`/lesson?index=${storage}`);
            }
        } else {
            router.push(`lesson?index=0`)
            localStorage.setItem("progress", 0)
        }
    }


    return (
    <>
        <nav className=' flex items-center justify-between px-32 flex-row h-20'>
            <div className=' flex items-center justify-between w-11/12'>
                <Link href={"/"} prefetch={true}><h1 className='text-4xl font-bold text-navy cursor-pointer'>BrainsMath</h1></Link>
                <div className='flex items-center justify-center gap-5'>
                    <h5 className='cursor-pointer' onClick={e => {handleStart();}}>Get Started</h5>
                    <Link href={"/trainsettings"} prefetch={true}><h5 className='cursor-pointer'>Practice & Statics</h5></Link>
                </div>
            </div>
            <div className='cursor-pointer bg-navy text-xl ml-16 rounded-2xl px-4 py-2 text-white font-medium hover:bg-black transition-all'>Login</div>
        </nav>
    </>
    );
}

export default NavBar;