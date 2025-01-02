import React from 'react'
import logo from "../../../public/logo.png"
import Image from 'next/image'
import  localFont  from 'next/font/local';

const jhonCream = localFont({
  src: [
    {
      path: '../../../public/fonts/Jhon Cream.otf',
      weight: '400',
      style: 'normal',
    },
  ],
})

const Logo = () => {
  return (
    <div className='logotx'>
        <a href="/">
        <Image src= {logo} alt='logo' />
        </a>
        <a href="/"> <span className= { `CName ${jhonCream.className}`}> Kagunita</span></a>
    </div>
  )
}

export default Logo