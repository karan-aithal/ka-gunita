'use client' 
import { Header } from "@/components/main/Header";
import Hero from "@/components/main/Hero";
import Image from "next/image";
import { BrowserRouter } from "react-router-dom";

import "@/scss/app.scss";


export default function Home() {
  return (
    <main className='Main'>     
       <div className='Head'>
        <Header/>
      </div>
      <Hero/>
   

    </main>    
  );
}
