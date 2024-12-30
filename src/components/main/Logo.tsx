import React from 'react'
import logo from "../../../public/logo.png"
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='logox'>
        <a href="/">
        <Image src= {logo} alt='logo' />
        </a>
        <a href="/"> <span className="CName"> Ka-Gunita</span></a>
        
    </div>
  )
}

export default Logo