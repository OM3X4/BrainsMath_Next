/* eslint-disable */
'use client'
import { Suspense } from 'react';
import React , { useState , useEffect} from 'react';
import { useSearchParams , useRouter } from 'next/navigation';
import {GenerateRandomQuestion} from "./DataCreator.js"





function TrainContent() {

    const [errorSound , setErrorSound] = useState(null);
    const [correctSound , setCorrectSound] = useState(null);
    const [correctSound2 , setCorrectSound2] = useState(null);

    //import sounds
    useEffect(() => {
        if (typeof window !== 'undefined' && typeof Audio !== 'undefined') {
            setErrorSound(new Audio("/Error.mp3"));
            setCorrectSound(new Audio("/Correct.mp3"));
            setCorrectSound2(new Audio("/Correct2.mp3"));
        }
    }, []);









    const [isButtonDisabled , setIsButtonDisabled] = useState(false)
    const [questions , setQuestions] = useState(null)
    const [currentContent , setCurrentContent] = useState(0);
    const [isWrongAnswer , setIsWrongAnswer] = useState(false);
    const [progress , setProgress] = useState(0);
    const [isCorrectAnswer , setIsCorrectAnswer] = useState(false);

    const [startTime , setStartTime] = useState(performance.now());
    const [collectedData , setCollectedData] = useState([]);

    const router = useRouter();
    const search = useSearchParams();



    const saveProgress = () => {
        try {
            const existingData = JSON.parse(localStorage.getItem("collectedData") || "[]");
            const mergedData = [...existingData, ...collectedData];
            localStorage.setItem("collectedData", JSON.stringify(mergedData));
            } catch (error) {
            console.error("Failed to save progress:", error);
        }
    };

    //Generate Questions
    useEffect(() => {
        let questions = [];
        for(let i = 0;i < parseInt(search.get("number")); i++){
            questions.push(GenerateRandomQuestion(parseInt(search.get("digit1")) ,parseInt(search.get("digit2")) , parseInt(search.get("op")) ))
        }
        setQuestions(questions)
    } , [])



    // no touch
    useEffect(() => {
        setStartTime(performance.now())
        if(collectedData[0]){
            // console.log(collectedData.reduce((sum , item) => sum + item.takenTime , 0))
            console.log(collectedData)
        }
    } , [currentContent])


    function dataToSpeed(Data)
    {
        let sum = 0;
        let number = 0;
        for(let i = 0; i < Data.length; i++)
        {
            if(typeof Data[i].takenTime == "number")
            {
                sum += Data[i].takenTime;
                number++;
            }
        }
        console.log(number)
        if(number > 0){
            return sum / number;
        }
        return sum / number;
    }


    function handleClick(choice , answer){
        if(isButtonDisabled) return;
        setIsButtonDisabled(true);
        if(answer == choice){
            if(questions.length - 1 > currentContent){
                const endTime = performance.now()
                if(endTime - startTime < 30000){
                    setCollectedData(prev => [...prev , {question:questions[currentContent] , takenTime:(endTime - startTime) , date:new Date(Date.now()) , type:questions[currentContent] , isRight:true}])
                }
                setProgress(c => c + ((1/questions.length) * 100))
                correctSound.play();
                setIsCorrectAnswer(true)
                setTimeout(() => {
                    setIsCorrectAnswer(false)
                    setCurrentContent(c => c + 1)
                    setIsButtonDisabled(false)
                } , 1000)
                setTimeout(() => {
                    setIsButtonDisabled(false)
                })
            }else{
                const endTime = performance.now()
                if(endTime - startTime < 30000){
                    setCollectedData(prev => [...prev , {question:questions[currentContent] , takenTime:(endTime - startTime) , date:new Date(Date.now()) , type:questions[currentContent] , isRight:true}])
                }
                saveProgress();
                let currentURL = encodeURIComponent(window.location.href)
                router.push(`/trainingfinisher?link=${currentURL}&speed=${dataToSpeed(collectedData)}`)
                correctSound2.play();
            }
        }else if(currentContent < questions.length - 1){
            const endTime = performance.now()
            const temp = questions[currentContent];
            errorSound.play();
            // Create a new array without mutating the original state
            const updatedContent = [
                ...questions.slice(0, currentContent), // Everything before currentContent
                ...questions.slice(currentContent + 1), // Everything after currentContent
                temp // Push the temp element to the end
            ];
            setCollectedData(prev => [...prev , {question:questions[currentContent] , takenTime:(endTime - startTime) , date:new Date(Date.now()) , type:questions[currentContent] , isRight:false}])



            setIsWrongAnswer(true)
            setTimeout(() => {
                setIsWrongAnswer(false)
                setQuestions(prev => (
                    updatedContent
                ));
            } , 500)
            setTimeout(() => {
                setIsButtonDisabled(false)
            } , 1500)

        }else{
            correctSound2.play();
            saveProgress();
            const endTime = performance.now()
            setCollectedData(prev => [...prev , {question:questions[currentContent] , takenTime:(endTime - startTime) , date:new Date(Date.now()) , type:questions[currentContent] , isRight:false}])
            let currentURL = encodeURIComponent(window.location.href)
            router.push(`/trainingfinisher?link=${currentURL}&speed=${dataToSpeed(collectedData)}`)
        }
    }



    return (
    <>
        <Suspense fallback={<div className='h-[calc(100vh-5rem)] flex items-center justify-center'>Loading</div>}>
            {questions ? <div className={`flex items-center justify-center h-[calc(80vh-5rem)]`}>
                <div className="w-3/4 md:w-6/12 bg-slate-400 rounded-full h-4 dark:bg-gray-700 absolute top-20">
                    <div className="bg-green h-4 rounded-full transition-all" style={{width: `${progress}%`}}></div>
                </div>
                <div>
                    {/* numbers */}
                    <div className=' text-8xl mb-10 font-bold text-navy text-center'>
                        {questions[currentContent].question}
                    </div>
                    {/* choice */}
                    <div className='flex items-center justify-center flex-wrap gap-5'>
                        {
                            questions[currentContent].choices?
                            questions[currentContent].choices.map((choice , i) => {
                                return(
                                    <div key={i} className='text-center mt-10 bg-green py-5 px-12 text-white rounded-2xl text-4xl shadow-[4px_4px_0_rgb(60,100,180)] transition-all duration-150 hover:bg-lightNavy cursor-pointer coin-button'
                                    onClick={e => handleClick(choice , questions[currentContent].answer)}>
                                        {choice}
                                    </div>
                                )
                            })
                            :
                        <div className='text-center mt-10 bg-green py-5 px-12 text-white rounded-2xl text-4xl shadow-[4px_4px_0_rgb(60,100,180)] transition-all duration-150 hover:bg-lightNavy cursor-pointer coin-button ' onClick={e => handleClick(1 , 1)}>
                            Next
                        </div>
                        }
                    </div>
                </div>
            </div>
            :""}
            {isWrongAnswer?
            <div className=" absolute bottom-10 md:w-1/4 left-1/2 -translate-x-1/2 flex items-center justify-center flex-col gap-5 p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">            <div className='flex items-center justify-center'>
                    <svg className="flex-shrink-0 inline w-7 h-7 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                        <span className="font-medium md:text-2xl">Wrong Answer!</span>
                    </div>
                </div>
            </div>: ""}
            {isCorrectAnswer?
            <div className=" absolute bottom-10 md:w-1/4 left-1/2 -translate-x-1/2 flex items-center justify-center flex-col gap-5 p-4 mb-4 text-sm text-emerald-600  border border-green rounded-lg" role="alert">
                <div className='flex items-center justify-center'>
                    <svg className="flex-shrink-0 inline w-7 h-7 me-3 text-green" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                        <span className="font-medium md:text-2xl text-nowrap text-green">Correct Answer!</span>
                    </div>
                </div>
            </div>:
            ""}
        </Suspense>
    </>
    );
}

function Train()
{
    return (
        <Suspense fallback={<div className='h-[calc(100vh-5rem)] flex items-center justify-center'>Loading</div>}>
            <TrainContent />
        </Suspense>
    );
}

export default Train;