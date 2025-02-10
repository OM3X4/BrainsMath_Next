/* eslint-disable */
'use client'
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { AiFillUnlock } from "react-icons/ai";
import { AiFillLock } from "react-icons/ai";
import React, { useEffect , useState } from 'react';
import { ProgressBase } from './ProgressBase';
import Link from 'next/link';
import Loading from "../Loading";







function Lessons() {

    const [deniedSound , setDeniedSound] = useState(null);


    useEffect(() => {
        if (typeof window !== 'undefined' && typeof Audio !== 'undefined') {
            setDeniedSound(new Audio("/denied2.mp3"));
        }
    }, []);


    const [userData , setUserData] = useState([])
    const [progress , setProgress] = useState(0)
    const [isLoading , setIsLoading] = useState(true)

    useEffect(() => {
        let data = localStorage.getItem("collectedData")
        setUserData(JSON.parse(data) || []);
    }, [])


    useEffect(() => {
        let current = 0;
        let data = [];
        ProgressBase.map((unit) => {
            data.push(unit.lessons)
        })
        data = data.flat();
        for(const level of data)
        {
            if(level.targetSpeed == 0)
            {
                current++;
            }else
            {
                let validTests = userData.filter((test) => {
                    return (test.digit1 == level.digit1 && level.digit2 == level.digit2 && test.type == level.op && (test.speed / 1000) <= level.targetSpeed)
                })
                if(validTests.length >= 3)
                {
                    current++;
                }else{
                    break;
                }
            }
        }
        setProgress(current)
        setIsLoading(false)
    } , [userData])

    useEffect(() => {
        console.log(progress)
    })




    return (
    isLoading ?
    <Loading />
    :<>
        <h1 className='text-center text-6xl font-Mono text-navy mb-5 dark:text-white'>Learning Plan</h1>
        {/* stats */}
        <div className='flex justify-center md:justify-start  w-[80%] mx-auto gap-3 mb-10'>
            <h1 className='font-Mono dark:text-white text-center'><span className='font-bold'>{parseInt((progress / 17) * 100)}%</span> Progress</h1>
        </div>
        {/* Main */}
        <div className=' w-[80%] mx-auto md:block flex items-center justify-center flex-col'>
            {
                ProgressBase.map((category) => {
                    return(
                        <div className='my-5'>
                            <h1 className='font-Mono text-2xl mb-5 dark:text-white'>{category.name}</h1>
                            <div className='flex gap-6 flex-col md:flex-row flex-wrap'>
                                {
                                    category.lessons.map((item) => {
                                        return(
                                            <Link href={item.link} onClick={(e) => {
                                                if(item.index > progress){
                                                    e.preventDefault()
                                                    deniedSound.play()
                                                }
                                                }}>
                                                <div className={` size-44 border-2 border-navy dark:border-white dark:text-slate-300 rounded-xl py-3 px-6 hover:scale-110 transition-all cursor-pointer flex flex-col justify-around hover:bg-navy group ${item.index > progress ? "" : "scale-[102%]"}`}>
                                                        <div className='flex items-center justify-between'>
                                                            <h1 className='font-Mono text-4xl group-hover:text-white transition-all'>{item.index}</h1>
                                                            {
                                                                item.index <= progress ?
                                                                    <div className="text-4xl text-navy group-hover:text-white transition-all dark:text-white"><AiFillUnlock /></div>
                                                                :
                                                                    <div className="text-4xl text-navy group-hover:text-white transition-all dark:text-white"><AiFillLock /></div>

                                                            }
                                                            <h1 className='text-xl font-Mono group-hover:text-white transition-all'>{item.targetSpeed}s</h1>
                                                        </div>
                                                    <h1 className='self-center text-center text-3xl font-semibold group-hover:text-white'>{item.img}</h1>
                                                    <h1 className='text-sm group-hover:text-white transition-all '>{item.name}</h1>
                                                    <div className="flex items-center justify-center">
                                                        {
                                                            item.starsMap.map((star) => {
                                                                let validTests = userData.filter((test) => (test.digit1 == item.digit1 && item.digit2 == item.digit2 && test.type == item.op && (test.speed / 1000) <= star))
                                                                if(validTests.length >= 3){
                                                                    return <AiFillStar className="text-3xl text-yellow-300"/>
                                                                }else{
                                                                    return <AiOutlineStar className="text-3xl text-yellow-300"/>
                                                                }

                                                            })
                                                        }
                                                    </div>
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