import React from "react";
import Lottie from "lottie-react";
import animationData from "./loading.json"; // Make sure the path is correct

const Loading = () => {
    return (
        <div className='flex items-center justify-center h-[calc(100vh-5rem)]'>
            <div className='h-[20vh]'>
                <Lottie animationData={animationData} className="h-full" />
            </div>
        </div>
    )
};

export default Loading;
