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

const getColor = (speed) => {
    // Ensure speed is within the 0 to 20 range
    const clampedSpeed = Math.min(Math.max(speed / 1000, 0), 12);

    // Normalize speed to range between 0 and 1 (0 = green, 1 = red)
    const normalizedSpeed = clampedSpeed / 20;

    // Calculate the RGB color components
    const red = Math.floor(normalizedSpeed * 255);  // red goes up as speed increases
    const green = 255 - red;  // green goes down as speed increases

    return `rgb(${red}, ${green}, 0)`;  // Smooth transition from green (0) to red (255)
};


function msToFormattedTime(ms) {
    const seconds = Math.floor(ms / 1000);
    const remainder = Math.floor((ms % 1000) / 10); // Convert to a 1/100 format
    return `${seconds}:${remainder.toString().padStart(2, "0")}`;
}

function TrainFinisherContent() {


    const search = useSearchParams()
    const [expression , setExpression] = useState(null)
    const [link , setLink] = useState("")
    const [speed , setSpeed] = useState(0)

    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * 20);
        setExpression(expressions[randomNumber]);
        setLink(decodeURIComponent(search.get("link")))
        setSpeed(parseInt(search.get("speed")))
    } , []);

    useEffect(() => {
    })



    return (
    <>
        <div className='flex items-center justify-center flex-col h-[calc(100vh-5rem)]'>
            <div className=' flex justify-center items-center flex-col md:flex-row md:gap-5 mb-10 md:mb-0'>
                <h1 style={{color: getColor(speed)}} className='text-7xl md:text-9xl font-mono font-black md:mb-10'>{msToFormattedTime(speed)}</h1>
                <h6 className='text-lg font-Mono font-bold text-navy'>SPQ<span className='text-lightNavy text-[0.5rem]'>(Second Per Question)</span></h6>
            </div>
            <h1 className='text-4xl text-center md:text-8xl mb-10 font-bold font-Mono text-lightNavy'>{expression}</h1>
            <div className=' flex gap-5 flex-col items-center justify-center'>
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