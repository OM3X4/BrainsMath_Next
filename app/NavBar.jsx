/* eslint-disable */
'use client';
import { BsCalendarWeekFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function NavBar() {

    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem("darkMode") === "1"; // Correctly reads storage
        }
        return false; // Default to light mode if window is undefined
    });


    // Update the DOM and localStorage when darkMode changes.
    useEffect(() => {

        if(typeof window !== 'undefined'){
            if (darkMode) {
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme", "dark");
                localStorage.setItem("darkMode", "1");
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("theme", "light");
                localStorage.setItem("darkMode", "0");
                console.log(false)
            }
        }
    }, [darkMode]);


    const router = useRouter();


    function handleStart() {
        router.push("/lessons")
    }


    return (
        <>
            <nav className=' flex items-center justify-between px-5 md:px-20 lg:px-32 flex-row h-20 dark:bg-navy transition-all'>
                <div className=' flex items-center justify-between w-11/12'>
                    <Link href={"/"} prefetch={true}><h1 className='hidden md:block text-2xl lg:text-4xl font-bold text-navy cursor-pointer dark:text-white transition-all'>BrainsMath</h1></Link>
                    <div className='flex items-center justify-center gap-5'>
                        <div className="relative group flex items-center justify-center flex-col gap-2">
                            {/* Trigger */}
                            <div
                                tabIndex="0"  // يجعل العنصر قابلاً للـ focus عند الضغط
                                className="cursor-pointer flex gap-2 dark:text-white transition-all hover:text-green dark:hover:text-green items-center justify-center">
                                DaysTrick <BsCalendarWeekFill />
                            </div>

                            {/* Dropdown */}
                            <div className="absolute top-[100%] left-0 flex flex-col gap-1 bg-navy dark:bg-white p-2 rounded-lg shadow-md w-full z-50
                                            md:opacity-0 pointer-events-none transition-all duration-300
                                            group-hover:opacity-100 group-hover:pointer-events-auto
                                            group-focus-within:opacity-100 group-focus-within:pointer-events-auto">
                                <Link href="/lesson?index=10"
                                    className="font-medium items-center justify-center cursor-pointer flex gap-2 dark:text-navy text-white transition-all hover:text-green dark:hover:text-green">
                                    Learn
                                </Link>
                                <Link href="/train?day=true&number=10"
                                    className="font-medium items-center justify-center cursor-pointer flex gap-2 dark:text-navy text-white transition-all hover:text-green dark:hover:text-green">
                                    Practice
                                </Link>
                            </div>
                        </div>


                        <Link href={"analyze"}><h5 className='cursor-pointer hidden lg:inline-block dark:text-white transition-all hover:text-green dark:hover:text-green'>Analyze</h5></Link>
                        <h5 className='cursor-pointer hidden lg:inline-block dark:text-white transition-all hover:text-green dark:hover:text-green' onClick={e => { handleStart(); }}>Your Plan</h5>
                        <Link href={"/trainsettings"} prefetch={true}><h5 className='cursor-pointer dark:text-white transition-all hover:text-green dark:hover:text-green'>Practice</h5></Link>
                        {
                            !darkMode ?
                                <div className=" p-1 rounded-full group hover:scale-110 transition-all"><BsFillMoonStarsFill className="text-4xl text-navy hover:scale-110 transition-all" onClick={e => { setDarkMode(prev => !prev) }} /></div>
                                :
                                <div className=" flex items-center justify-center p-1 rounded-full group hover:scale-110 transition-all"><MdOutlineWbSunny className="text-4xl text-yellow-500 transition-all" onClick={e => { setDarkMode(prev => !prev) }} /></div>
                        }
                    </div>
                </div>
                {/* <div className='cursor-pointer bg-navy text-xl ml-16 rounded-2xl px-4 py-2 text-white font-medium hover:bg-black transition-all'>Login</div> */}
            </nav>
        </>
    );
}

export default NavBar;