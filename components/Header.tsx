    import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
    <header className="px-4 sm:px-8 lg:px-12 pt-4 sm:pt-6 pb-1">
        <Image src="/zeenomlogo.svg" alt="Zeenomtech" width={200} height={120} className="w-[160px] sm:w-[180px] lg:w-[200px] h-auto" />
    </header>
  )
}

export default Header