import React from 'react'
import Logo from './Logo'
import Nav from './Nav'

export const Header = () => {
  return (
    <header className="bg-transparent sticky top-0 z-[20] mx-auto flex w-full items-center justify-between border-b border-gray-700 p-7">
        <Logo></Logo> 
        
        <Nav></Nav>   Header     
    </header>
  )
}
