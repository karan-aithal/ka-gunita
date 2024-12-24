'use client' 
import { Header } from "@/components/main/Header";
import Hero from "@/components/main/Hero";
import Image from "next/image";
import { BrowserRouter } from "react-router-dom";

import "@/scss/app.scss";


export default function Home() {
  return (
    <main className='h-full w-full '>     
      <Hero></Hero>
    <div className='flex flex-col gap-20'>
    <Header></Header>
    </div>

    </main>    
  );
}
