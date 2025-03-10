/* eslint-disable */
'use client'
import { Suspense } from 'react';
import React, { useState , useEffect } from 'react';
import Link from 'next/link';
import Loading from '../Loading';


const expressions = [
    "Nice Work",
    "Excellent",
    "Great Job",
    "Well Done",
    "Awesome",
    "Fantastic",
    "Good Going",
    "Keep it Up",
    "Impressive",
    "You're Crushing It",
    "Superb",
    "Outstanding",
    "Brilliant",
    "Phenomenal",
    "Remarkable",
    "You Rock",
    "Top Notch",
    "Wonderful",
    "Exceptional",
    "Masterful"
];



function LessonFinisherContent() {

    const [expression , setExpression] = useState(null)


    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * 20);
        setExpression(expressions[randomNumber]);
    } , [])

    return (
    <>
        <Suspense fallback={<Loading />}>
            <div className='flex items-center justify-center flex-col h-[calc(100vh-5rem)]'>
                <h1 className='text-5xl md:text-8xl mb-10 font-bold font-Mono text-lightNavy dark:text-white'>{expression}</h1>
                <Link href={"/lessons"} prefetch={true}>
                    <div className='text-center mt-10 bg-green dark:bg-lightNavy dark:hover:brightness-110 py-5 px-12 text-white rounded-2xl text-4xl shadow-[4px_4px_0_rgb(60,100,180)] transition-all duration-150 hover:bg-lightNavy cursor-pointer coin-button '>
                        Next
                    </div>
                </Link>
            </div>
        </Suspense>
    </>
    );
}

function LessonFinisher()
{
    return (
        <Suspense fallback={<div className='h-[calc(100vh-5rem)] flex items-center justify-center'>Loading</div>}>
            <LessonFinisherContent />
        </Suspense>
    );
}

export default LessonFinisher;