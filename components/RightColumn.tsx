import React from 'react'
import Image from "next/image";

const RightColumn = () => {
    return (
        <div className="hidden lg:flex flex-1 min-w-0 justify-end items-center overflow-hidden">
            <div className="w-full max-w-[450px] xl:max-w-[510px] mx-auto lg:mx-0">
                <Image
                    src="/Hero-img.svg"
                    width={450}
                    height={450}
                    alt="Coding illustration"
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 1280px) 520px, 580px"
                />
            </div>
        </div>
    )
}

export default RightColumn