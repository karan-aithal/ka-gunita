import React from 'react'
import logo from "../../../public/logo.png"
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='logo w-40 h-36'>
        <a href="/">
        <Image src= {logo} alt='logo'/>
        </a>
    </div>
  )
}

export default Logo