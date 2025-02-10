/* eslint-disable */
'use client'
import { Typewriter } from 'react-simple-typewriter';
import { Data } from "./Data/Collary2";
import { AiFillGithub } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { MdOutlineCenterFocusStrong } from "react-icons/md";
import Loading from './Loading';
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";



function Home() {


    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter();


    function handleStart() {
        router.push('/lessons')
    }


    const [operation, setOperation] = useState(3);

    const WhatWillYouLearn = [
        ["Learn Quick Addition Tricks: Master simple techniques to add numbers faster by rounding and redistributing values.",
            "Boost Your Mental Addition Skills: Use mental math strategies to quickly solve addition problems without relying on a calculator."
            , "Develop Speed in Adding Large Numbers: Practice tricks to add multi-digit numbers in seconds, improving both speed and accuracy."
        ],
        [
            "Simplify Subtraction with Smart Strategies: Discover methods to subtract numbers faster by rounding and simplifying.",
            "Quickly Solve Complex Subtraction Problems: Learn techniques that make subtracting large numbers quick and easy, even mentally.",
        ],
        [
            "Multiply Quickly with Simple Tricks: Learn to multiply numbers in your head using methods like the rainbow method and multiplication by 11.",
            "Speed Up Your Multiplication: Master multiplication shortcuts to handle large numbers and multi-digit calculations faster.",
            "Master Advanced Multiplication Techniques: From multiplying one-digit by two-digit numbers to three-digit multiplications, get comfortable with any problem."
        ],
        [
            "Understand and Apply Square Formulas: Learn how to quickly calculate squares of numbers, both simple and complex.",
            "Accelerate Your Calculation Speed: Use tricks to solve square problems rapidly, improving your efficiency in math.",
        ]
        ,
        [
            "Quickly Find Square Roots: Learn tricks to estimate and calculate square roots, including both perfect and non-perfect squares.",
            "Master the Square Root Trick: Discover how to approximate square roots in seconds using simple estimation techniques.",
            "Boost Your Confidence in Roots: Gain the ability to quickly and accurately solve square root problems without a calculator."
        ]
    ]

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        } , 400)
    }, [])





    return (
        isLoading ?
            <Loading />
            : <>
                <header className="flex items-center justify-center flex-col md:h-[calc(100vh-5rem)] dark:bg-navy transition-all">
                    <div className="flex items-center justify-center flex-col">
                        <h1 className='text-navy text-4xl md:text-8xl lg:text-[9rem] font-bold font-Mono text-center mb-5 whitespace-pre-wrap dark:text-white transition-all'>
                            <Typewriter
                                words={["Learn\nMental Math"]}
                                cursor
                                loop={1}
                                cursorStyle="_"
                                typeSpeed={70}
                            />
                        </h1>
                    </div>
                    <p className="text-sm md:text-xl lg:text-xl text-gray dark:text-slate-400">Speed, Accuracy, and Confidence in Every Calculation!</p>
                    <button
                        className="button hover:-translate-x-1 hover:-translate-y-1"
                        onClick={handleStart}
                    >
                        Get Started
                    </button>
                </header>

                <main>
                    <section className="bg-[url('../public/GeometricLightNavy.png')] bg-navy pb-10 bg-contain brightness-90 mt-20 flex items-center justify-center flex-col pt-10 ">
                        <h2 className="font-Mono text-3xl md:text-6xl text-white font-medium ">Why Mental Math?</h2>
                        <div className="flex items-center justify-around w-full mt-10">
                            <article className="text-white text-xl md:text-3xl text-center flex items-center justify-center flex-col">
                                <MdOutlineCenterFocusStrong className="text-4xl md:text-6xl mb-3" />
                                <h3>Improve Focus</h3>
                            </article>
                            <article className="text-white text-xl md:text-3xl text-center flex items-center justify-center flex-col">
                                <FaLightbulb className="text-4xl md:text-6xl mb-3" />
                                <h3>Improve</h3>
                                <h3>Problem Solving</h3>
                            </article>
                            <article className="text-white text-xl md:text-3xl text-center flex items-center justify-center flex-col">
                                <FaChartPie className="text-4xl md:text-6xl max-w-8 text-wrap mb-3" />
                                <h3>Improve</h3>
                                <h3>Financial Mangement</h3>
                            </article>
                        </div>
                    </section>

                    <section className="pt-10 items-center justify-center flex-col hidden md:flex">
                        <h2 className="text-navy text-4xl md:text-7xl font-bold">What Will You Learn?</h2>
                        <div className="flex items-center justify-center mt-20 gap-5">
                            <figure className="w-1/3 -ml-40 mr-10">
                                <img src="/BlackBrain.webp" alt="Brain training concept" className="" />
                            </figure>
                            <div className="w-2/3">
                                <div className="flex items-center justify-around text-xl text-white bg-lightNavy mb-10 rounded-full py-5">
                                    <button
                                        className={`${operation === 0 ? 'bg-navy' : ''} rounded-full px-5 py-3 transition-all hover:bg-black cursor-pointer`}
                                        onClick={() => setOperation(0)}
                                    >
                                        Addition
                                    </button>
                                    <button
                                        className={`${operation === 1 ? 'bg-navy' : ''} rounded-full px-5 py-3 transition-all hover:bg-black cursor-pointer`}
                                        onClick={() => setOperation(1)}
                                    >
                                        Subtraction
                                    </button>
                                    <button
                                        className={`${operation === 2 ? 'bg-navy' : ''} rounded-full px-5 py-3 transition-all hover:bg-black cursor-pointer`}
                                        onClick={() => setOperation(2)}
                                    >
                                        Multiplication
                                    </button>
                                    <button
                                        className={`${operation === 3 ? 'bg-navy' : ''} rounded-full px-5 py-3 transition-all hover:bg-black cursor-pointer`}
                                        onClick={() => setOperation(3)}
                                    >
                                        Squares
                                    </button>
                                    <button
                                        className={`${operation === 4 ? 'bg-navy' : ''} rounded-full px-5 py-3 transition-all hover:bg-black cursor-pointer`}
                                        onClick={() => setOperation(4)}
                                    >
                                        Roots
                                    </button>
                                </div>
                                <ul className="bg-slate-100 p-5 rounded-3xl max-w-1/2 dark:bg-lightNavy">
                                    {WhatWillYouLearn[operation].map((item, index) => (
                                        <li key={index} className="flex items-center justify-center my-3 font-medium text-wrap dark:text-white">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="flex items-center justify-center mx mt-24 mb-5 flex-col md:flex-row">
                        <div className="flex items-center justify-center flex-col">
                            <h2 className=" text-3xl md:text-7xl text-center font-semibold text-navy dark:text-white">Practice Makes Perfect</h2>
                            <p className="text-xs md:text-xl dark:text-slate-300">We Have Tons Of Practice Inside</p>
                        </div>
                        <img src="/Arrows.webp" alt="Arrow icon illustrating practice flow" className="w-2/3 md:inline-block" />
                    </section>
                </main>

                <footer className="flex items-center justify-center bg-navy dark:brightness-75 text-white h-16 text-xl gap-5">
                    <a href="https://facebook.com" aria-label="Facebook" className="cursor-pointer">
                        <BsFacebook />
                    </a>
                    <a href="https://twitter.com" aria-label="Twitter" className="cursor-pointer">
                        <FaXTwitter />
                    </a>
                    <h1 className="text-3xl font-bold">BrainsMath</h1>
                    <a href="https://youtube.com" aria-label="YouTube" className="cursor-pointer">
                        <AiFillYoutube />
                    </a>
                    <a href="https://github.com" aria-label="GitHub" className="cursor-pointer">
                        <AiFillGithub />
                    </a>
                </footer>
            </>
    );
}

export default Home;