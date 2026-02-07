import React from 'react'
import Image from "next/image";

const RightColumn = () => {
    return (
        <div className="hidden lg:flex flex-1 min-w-0 justify-end items-center">
            <div className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[650px] mx-auto lg:mx-0">
                <Image src="/Hero-img.svg" width={650} height={650} alt="Coding illustration" className="w-full h-auto object-contain" sizes="(max-width: 640px) 400px, (max-width: 1024px) 500px, 650px" />
            </div>
        </div>
    )
}

export default RightColumn