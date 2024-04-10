import React from 'react'
import logo from "../../../public/logo.png"
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='logo w-40 h-36 flex items-center animate-pulse'>
        <a href="/">
        <Image src= {logo} alt='logo'/>
        </a>
        <span className="font-bold"> Ka-Gunita</span>
    </div>
  )
}

export default Logo