import React from 'react'
import Link from 'next/link'
import variables from '../../app/variables.module.scss'



const Nav = () => {
  return (
    
    <>    
    <Link href = "/"  className={variables.title}>Home</Link>
    <Link href = "/" className=' text-[#0c2438] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] hover:text-[#FDD726] font-semibold text-3xl'>About</Link>
    <Link href = "/" className=' text-[#0c2438] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] hover:text-[#427E93] font-semibold text-3xl'>Catalog</Link>
    <Link href = "/" className=' text-[#0c2438] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] hover:text-[#4156A1] font-semibold text-3xl'>Contact</Link>
    </>
    
  )
  
}

export default Nav