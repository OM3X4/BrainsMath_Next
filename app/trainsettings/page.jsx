/* eslint-disable */
'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function TrainChoose() {

    const [digits1 , setDigits1] = useState(1)
    const [digits2 , setDigits2] = useState(1)
    const [operation , setOperation] = useState(0)
    const [number , setNumber] = useState(10)

    const router = useRouter()

    function handleGo()
    {
        router.push(`/train?digit1=${digits1}&digit2=${digits2}&op=${operation}&number=${number}`)
    }



    return (
    <>
        <div className='h-[calc(100vh-5rem)] flex items-center justify-center flex-col'>
            <h1 className='font-Mono text-3xl text-center md:text-6xl font-extrabold text-navy mb-14 md:mb-24'>Choose Setting You Want</h1>
            <div className='flex flex-col items-center justify-center gap-2'>
                <select name="First Number Digits" id="" className="text-center md:text-3xl max-w-[calc(100vw-10rem)] mx-5 py-2 px-4 font-semibold rounded-3xl bg-lightNavy text-white" onChange={e => setDigits1(e.target.value)}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
                <select name="Second Number Digits" id="" className="text-center md:text-3xl max-w-[calc(100vw-10rem)]  mx-5 py-2 px-4 font-semibold rounded-3xl bg-lightNavy text-white" onChange={e => setDigits2(e.target.value)}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
                <select name="Second Number Digits" id="" className="text-center md:text-3xl max-w-[calc(100vw-10rem)]  mx-5 py-2 px-4 font-semibold rounded-3xl bg-lightNavy text-white" onChange={e => setOperation(e.target.value)}>
                    <option value={0}>Addition</option>
                    <option value={1}>Subtraction</option>
                    <option value={2}>Multiplication</option>
                    <option value={3}>Square</option>
                    <option value={4}>Square Root</option>
                </select>
                <input placeholder='Number Of Questions' name="Number Of Questions" id="" type='number' className="text-center md:text-3xl mx-5 py-2 px-8 font-semibold rounded-3xl bg-lightNavy text-white appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" onChange={e => setNumber(e.target.value)}>
                </input>
            </div>
            <div className='button' onClick={handleGo}>
                Go
            </div>
        </div>
    </>
    );
}

export default TrainChoose;