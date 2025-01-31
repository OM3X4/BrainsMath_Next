/* eslint-disable */
'use client'
import { Suspense } from 'react';
import React , { useState , useEffect} from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

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


function TrainFinisherContent() {


    const search = useSearchParams()
    const [expression , setExpression] = useState(null)
    const [link , setLink] = useState("")


    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * 20);
        setExpression(expressions[randomNumber]);
        setLink(search.get("link"))
    } , []);


    return (
    <>
        <div className='flex items-center justify-center flex-col h-[calc(100vh-5rem)]'>
            <h1 className=' text-8xl mb-10 font-bold font-Mono text-lightNavy'>{expression}</h1>
            <div className=' flex gap-5'>
                <Link href={link} prefetch={true}>
                    <div className='text-center mt-10 bg-green py-5 px-12 text-white rounded-2xl text-4xl shadow-[4px_4px_0_rgb(60,100,180)] transition-all duration-150 hover:bg-lightNavy cursor-pointer coin-button '>
                        Repeat
                    </div>
                </Link>
                <Link href={"/"} prefetch={true}>
                    <div className='text-center mt-10 bg-green py-5 px-12 text-white rounded-2xl text-4xl shadow-[4px_4px_0_rgb(60,100,180)] transition-all duration-150 hover:bg-lightNavy cursor-pointer coin-button '>
                        Main Menu
                    </div>
                </Link>
            </div>
        </div>
    </>
    );
}
function TrainFinisher()
{
    return (
        <Suspense fallback={<div className='h-[calc(100vh-5rem)] flex items-center justify-center'>Loading</div>}>
            <TrainFinisherContent />
        </Suspense>
    );
}

export default TrainFinisher;