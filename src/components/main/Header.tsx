import React from 'react'
import { useState } from 'react'
import Logo from './Logo'
import Nav from './Nav'

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="header sticky top-0 left-0 z-[20] mx-auto 
    flex w-full items-center justify-between border-b border-gray-700 p-7 
    transition duration-300 ease-in-out${ isDarkMode ? 'bg-transparent text-white' : 'bg-transparent text-gray-800'">
        <Logo></Logo> 
        
        <Nav></Nav>   Header     
    </header>
  )
}
