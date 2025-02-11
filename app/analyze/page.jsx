/* eslint-disable */
'use client'
import { Suspense } from 'react';
import React , {useEffect , useState} from 'react';
import LineChart from './LineChart.jsx';
import Link from 'next/link';






function AnalyticsContent() {


    const [stored , setStored] = useState([])

    const [digit1 , setDigit1] = useState(1);
    const [digit2 , setDigit2] = useState(1);
    const [operation , setOperation] = useState(0);

    const [validData , setValidData] = useState([])



    useEffect(() => {

        if(typeof window !== 'undefined'){
        let data = localStorage.getItem("collectedData")
        if(data)
        {
            setStored(JSON.parse(data).sort((a, b) => new Date(a.date) - new Date(b.date))
        );
        }}
    } , [])

    useEffect(() => {
        console.log(stored.filter(test => test.digit1 == digit1 && test.digit2 == digit2 && test.type == operation && test.number > 9))
        setValidData(stored.filter(test => test.digit1 == digit1 && test.digit2 == digit2 && test.type == operation && test.number > 9))
    } , [stored , digit1 , digit2 , operation])








    return (
    <>
        <div className='flex items-center justify-center flex-col'>
            {/* filters */}
            <div className='h-20'>
                <select name="First Number Digits" id="" className="text-center md:text-3xl max-w-[calc(100vw-10rem)] mx-5 py-2 px-4 font-semibold rounded-3xl bg-lightNavy text-white" onChange={e => setDigit1(e.target.value)}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
                <select name="Second Number Digits" id="" className="text-center md:text-3xl max-w-[calc(100vw-10rem)]  mx-5 py-2 px-4 font-semibold rounded-3xl bg-lightNavy text-white" onChange={e => setDigit2(e.target.value)}>
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
            </div>
            {/* chart */}
            <div className=' max-h-[calc(100vh-12rem)] w-[70%] dark:bg-white p-9 rounded-3xl'>
                {
                validData.length ?
                    <LineChart data={validData}/>
                :
                    <div className='text-center text-5xl font-Mono font-bold'>No Avaliable Data , Go Train More</div>
                }
            </div>
        </div>
    </>
    );
}

function Analytics()
{
    return(
        <Suspense fallback={<div className='h-[calc(100vh-5rem)] flex items-center justify-center'>Loading</div>}>
            <AnalyticsContent />
        </Suspense>
    )
}

export default Analytics;