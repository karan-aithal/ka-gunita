'use client' 
import { Header } from "@/components/main/Header";
import Hero from "@/components/main/Hero";
import Portfolio from "@/components/main/Portfolio";
import Image from "next/image";
import { BrowserRouter } from "react-router-dom";
import Section2 from "@/components/main/Section2";



// import Layout from "@/components/main/Layout";
import { motion } from "framer-motion";
import Link from "next/link";

// import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { usePathname } from "next/navigation";
// import LocomotiveScroll from "locomotive-scroll";



import "@/scss/app.scss";


export default function Home() {

  // const containerRef = useRef(null);
  // const pathname = usePathname();

  // useEffect(() => {
  //   if (containerRef.current) {
  //     const scroll = new LocomotiveScroll({
  //       el: containerRef.current as HTMLElement,
  //       smooth: true,
  //     });
  //     return () => {
  //       if (scroll && typeof scroll.destroy === 'function') {
  //         scroll.destroy();
  //       }
  //     };
  //   }
  //   return () => {
  //   };
  // }, [pathname]);



  return (
    // <Layout>
    <main className='Main'>     
       <div className='Head'>
        <Header/>
        </div>
        <Hero/>
        <Portfolio/>
        <Section2/>

    </main>    
    // </Layout>

  );
}
