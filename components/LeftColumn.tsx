import React from 'react'
import Image from "next/image";

const WHATSAPP_GROUP_URL = process.env.NEXT_PUBLIC_WHATSAPP_GROUP_URL || "https://chat.whatsapp.com/"

const techIcon = [
    { path: "/html.svg", text: "HTML 5" },
    { path: "/css.svg", text: "CSS 3" },
    { path: "/javascript.svg", text: "JAVASCRIPT" },
    { path: "/react.svg", text: "REACT JS" },
]

const LeftColumn = () => {
    return (
        <div className="shrink-0 grow-0 w-full lg:w-auto max-w-xl lg:max-w-none">
            <p className="text-gray-700 text-base sm:text-xl lg:text-[25px] font-extrabold mb-3 sm:mb-4">
                Build an <span className="text-[#1353EB]">in-demand</span> tech skill for 2026
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-bold leading-tight mb-4 sm:mb-6">
                <span className="text-[#1353EB]">Learn </span>
                <span className="text-[#CC9933]">Frontend Development</span>
                <br />
                <span className="text-[#1353EB]">From Scratch</span>
            </h2>
            <p className="text-gray-700 font-bold text-base sm:text-xl lg:text-[25px] mb-8 sm:mb-10 leading-relaxed">
                Learn HTML, CSS, JavaScript & React through
                <br className="hidden sm:block" />
                practical, beginner-friendly training.
            </p>
            <div className="flex flex-wrap gap-6 sm:gap-12 lg:gap-16 mb-10 sm:mb-12">
                {techIcon.map(({ path, text }) => (
                    <div key={text} className="flex flex-col items-center">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 mb-1 sm:mb-2">
                            <Image src={path} alt={text} width={64} height={64} className="w-full h-full object-contain" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-gray-700">{text}</span>
                    </div>
                ))}
            </div>
            <a href={WHATSAPP_GROUP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1E40AF] hover:bg-[#1E3A8A] active:bg-[#1E3A8A] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-colors shadow-lg cursor-pointer touch-manipulation">
                <Image src="/whatsapp.svg" width={25} height={25} alt="WhatsApp" aria-hidden />
                Join the FREE WhatsApp Group
            </a>
        </div>
    )
}

export default LeftColumn