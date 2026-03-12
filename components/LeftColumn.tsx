import React from 'react'
import Image from "next/image";
import WhatsAppCTA from "./WhatsAppCTA";

const LeftColumn = () => {
    return (
        <div className="shrink-0 grow-0 w-full lg:w-auto max-w-3xl lg:max-w-none">
            {/* Program label */}
            <p className="text-xs sm:text-sm lg:text-base font-semibold tracking-wide text-[#071258] mb-2 sm:mb-3">
                ZeenomTech Beginner Scholarship Program
            </p>

            {/* Main heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-tight text-[#0736C8] mb-2 sm:mb-3">
                Modern Frontend <br /> Development Masterclass
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-800 mb-6 sm:mb-8">
                Become a <span className="text-[#F59E0B]">Job-Ready</span> Frontend Developer in 2026
            </p>

            {/* Feature grids */}
            <div className="grid gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:grid-cols-2">
                <div className="rounded-xl border border-dashed border-[#1353EB]/40 px-2 py-3 shadow-sm">
                <div className="bg-[#F3FAFD] h-full rounded-xl p-2">
                     <ul className="space-y-1.5 text-xs sm:text-sm text-gray-800">
                        <li>▶ Modern HTML, CSS, JavaScript</li>
                        <li>▶ CSS library (Tailwind CSS)</li>
                        <li>▶ React & modern frontend tools</li>
                        <li>▶ Upwork profile optimization</li>
                        <li>▶ LinkedIn optimization</li>
                        <li>▶ Access to jobs & internships</li>
                        <li>▶ 1-year mentorship bootcamp</li>
                    </ul>
                </div>
                   
                </div>

                <div className="rounded-xl border border-dashed border-[#1353EB]/40  px-2 py-3 shadow-sm">
                <div className="bg-[#FFF7F0] h-full rounded-xl p-2">
                     <ul className="space-y-1.5 text-xs sm:text-sm text-gray-800">
                        <li>▶ Networking opportunities</li>
                        <li>▶ Live & recorded classes</li>
                        <li>▶ Accountability partners</li>
                        <li>▶ 1-on-1 guidance (Calendly booking)</li>
                        <li>▶ Certificate upon completion</li>
                    </ul>
                </div>
                   
                </div>
            </div>

            {/* Pricing + CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-3 sm:mb-4">
                <div className="rounded-xl border border-dashed border-[#1353EB]/40  p-2 text-xs sm:text-sm lg:text-base font-semibold text-[#0F172A]">
                <div className="p-2 bg-[#B2E0E7] rounded-xl">
                    <p className="text-[#070560]">EARLY ACCESS PRICE: <span className="text-[#FF1F1F]">₦15,000</span></p>
                    <p className="text-[11px] sm:text-xs text-gray-700">For the first 100 students</p>
                    <p className="text-[11px] sm:text-xs text-gray-500 mt-1">Regular price: <span className="text-[#FF1F1F] line-through">₦20,000</span></p>
                </div>
                    
                </div>

                <div className="flex-1">
                    <WhatsAppCTA />
                </div>
            </div>

            <p className="text-xs sm:text-sm font-extrabold text-[#DC2626] tracking-wide">
                LIMITED SLOTS AVAILABLE!!!
            </p>
        </div>
    )
}

export default LeftColumn