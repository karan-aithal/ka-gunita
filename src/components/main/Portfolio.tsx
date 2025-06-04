import React from "react";
import potraitL from "../../../public/Karan 1_LE_upscale_magic_x4_strength_75_similarity_100.png";
import potraitR from "../../../public/DSC04980Transp.png";
import { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from 'gsap';


import Image from "next/image";

import localFont from "next/font/local";

const misto = localFont({
  src: [
    {
      path: "../../../public/fonts/Misto.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

const tfNuke = localFont({
  src: [
    {
      path: "../../../public/fonts/TF Nukes DEMO.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

const Overt = localFont({
  src: [
    {
      path: "../../../public/fonts/Overt.otf",
      //weight: '400',
      style: "normal",
    },
  ],
});

const anonymousPro = localFont({
  src: [
    {
      path: "../../../public/fonts/AnonymousPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const arrayWide = localFont({
  src: [
    {
      path: "../../../public/fonts/Array-Wide.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

const Portfolio = () => {


  // useEffect(() => {
  //   const columns = document.querySelectorAll(".grid .column");

  //   const handleMouseOver = (event: MouseEvent) => {
  //     const column = event.target as HTMLElement;
  //     const leftImage = document.querySelector(
  //       ".Port-left .image-wrapper-l"
  //     ) as HTMLElement;
  //     const rightImage = document.querySelector(
  //       ".Port-right .image-wrapper-r"
  //     ) as HTMLElement;
  //     const coderLeft = document.querySelector(".Coder-left") as HTMLElement;
  //     const designRight = document.querySelector(".Design-right") as HTMLElement;
      
  //     const indexAttr = column.getAttribute("data-index");

  //     if (indexAttr) {
  //       const index = parseInt(indexAttr, 10);
  //       if (index <= 6 && index > 0 && leftImage) {
  //         leftImage.style.transform = "scale(1.1) translateX(-300px) translateY(-38px)";
  //         leftImage.style.visibility = "visible";
  //         // Ensure the image is visible
  //         rightImage.style.visibility = "hidden";
  //         // Hide the right image

  //         coderLeft.style.transform = "translateX(-44vw)";
  //         designRight.style.transform = "translateX(-10vw)";
  //         //h1 and p movement
  //       } else if (index > 6 && index <= 12 && rightImage) {
  //         rightImage.style.transform = "scale(1.05) translateX(300px)   translateY(-24px)";
  //         rightImage.style.visibility = "visible"; // Ensure the image is visible
  //         leftImage.style.visibility = "hidden"; // Hide the left image

  //         coderLeft.style.transform = "translateX(10vw)";
  //         designRight.style.transform = "translateX(44vw)";
        
  //       }
  //     }
  //   };
  //   const handleMouseOut = () => {
  //     const leftImage = document.querySelector(
  //       ".Port-left .image-wrapper-l"
  //     ) as HTMLElement;
  //     const rightImage = document.querySelector(
  //       ".Port-right .image-wrapper-r"
  //     ) as HTMLElement;
  //     const coderLeft = document.querySelector(".Coder-left") as HTMLElement;
  //     const designRight = document.querySelector(".Design-right") as HTMLElement;
     
  //     if (leftImage) {
  //       leftImage.style.transform = "scale(1) ";
  //       leftImage.style.visibility = "visible"; // Left image remains visible in center
  //     }
  //     if (rightImage) {
  //       rightImage.style.transform = "scale(1)";
  //       rightImage.style.visibility = "hidden";
  //       // Hide the right image
  //     }
  //     coderLeft.style.transform = "translateX(0)";
  //     designRight.style.transform = "translateX(0)";
  //   };
  //   columns.forEach((column) => {
  //     column.addEventListener("mouseover", handleMouseOver as EventListener);
  //     column.addEventListener("mouseout", handleMouseOut);
  //   });

  //   return () => {
  //     columns.forEach((column) => {
  //       column.removeEventListener(
  //         "mouseover",
  //         handleMouseOver as EventListener
  //       );
  //       column.removeEventListener("mouseout", handleMouseOut);
  //     });
  //   };
  // }, []);



  useEffect(() => {
  const leftText = document.querySelector('.Coder-left');
  const rightText = document.querySelector('.Design-right');
  const leftImage = document.querySelector('.image-wrapper-l');
  const rightImage = document.querySelector('.image-wrapper-r');

  const centerX = window.innerWidth / 2;

  interface MouseMoveEvent extends MouseEvent {
    clientX: number;
  }

  const handleMouseMove = (e: MouseMoveEvent) => {
    const distance = Math.abs(e.clientX - centerX);
    const maxDistance = centerX;
    const opacity = 1 - distance / maxDistance;

    if (e.clientX < centerX) {
      gsap.to(rightImage, { opacity, duration: 0.4});
    } else {
      gsap.to(leftImage, { opacity, duration: 0.4 });
    }
  };

const handleMouseEnterLeft = () => {
  gsap.killTweensOf([rightText, rightImage, leftText, leftImage]);
  // Instantly hide right side
  gsap.set(rightText, { autoAlpha: 0 });
  gsap.set(rightImage, { autoAlpha: 0 });
  // Instantly show left side (before animating)
  gsap.set(leftText, { autoAlpha: 1 });
  gsap.set(leftImage, { autoAlpha: 1 });
  // Animate left side in
  gsap.to(leftText, { scale: 1.2, duration: 0.3 });
  gsap.to(leftImage, { x: 300, duration: 0.3 });
  window.addEventListener('mousemove', handleMouseMove);
};

const handleMouseEnterRight = () => {
  gsap.killTweensOf([rightText, rightImage, leftText, leftImage]);
  // Instantly hide left side
  gsap.set(leftText, { autoAlpha: 0 });
  gsap.set(leftImage, { autoAlpha: 0 });
  // Instantly show right side (before animating)
  gsap.set(rightText, { autoAlpha: 1 });
  gsap.set(rightImage, { autoAlpha: 1 });
  // Animate right side in
  gsap.to(rightText, { scale: 1.2, duration: 0.3 });
  gsap.to(rightImage, { x: -300, duration: 0.3 });
  window.addEventListener('mousemove', handleMouseMove);
};

const handleMouseLeave = () => {
  gsap.killTweensOf([rightText, rightImage, leftText, leftImage]);
  // Reset both sides instantly
  gsap.set([leftText, rightText], { scale: 1, autoAlpha: 1 });
  gsap.set(leftImage, { x: 0, autoAlpha: 1 });
  gsap.set(rightImage, { x: 0, autoAlpha: 0 });
  window.removeEventListener('mousemove', handleMouseMove);
};
  if (leftText && rightText) {
    leftText.addEventListener('mouseenter', handleMouseEnterLeft);
    rightText.addEventListener('mouseenter', handleMouseEnterRight);
    leftText.addEventListener('mouseleave', handleMouseLeave);
    rightText.addEventListener('mouseleave', handleMouseLeave);
  }

  return () => {
    if (leftText && rightText) {
      leftText.removeEventListener('mouseenter', handleMouseEnterLeft);
      rightText.removeEventListener('mouseenter', handleMouseEnterRight);
      leftText.removeEventListener('mouseleave', handleMouseLeave);
      rightText.removeEventListener('mouseleave', handleMouseLeave);
    }
    window.removeEventListener('mousemove', handleMouseMove);
  };
}, []);


  return (
    <>
       <div className="container">
        {/* Extra FOG */}
        <div className="fog-container">
          <div className="fog-img fog-img-first"></div>
          <div className="fog-img fog-img-second"></div>
        </div>
        {/* <section className="hero" data-scroll-section>
    
        <p className="subtitle">Full-Stack Developer</p>
        <a href="mailto:danielgraziotti99@gmail.com" className="email-btn">📧 danielgraziotti99@gmail.com</a>
      </section> */}
      
{/* Left Side (Coder) */}
        <div className="Port-left">
          <div className="Coder-left">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <span className={`${arrayWide.className}`}>{'<CODER>'}</span>
            </motion.h1>
            <p className={`${anonymousPro.className}`}>
              Passionate coder, solving one micro problem at a time
            </p>
          </div>
          <div className="image-wrapper-l">
            <Image
              src={potraitL}
              alt="portrait"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* Right Side (Designer) */}
        <div className="Port-right">
          <div className="Design-right">
            <h1 className={`${misto.className}`}>Designer</h1>
            <p className={`${anonymousPro.className}`}>
              Designer, specialising in creativity, UI and Design systems
            </p>
          </div>
          <div className="image-wrapper-r">
            <Image
              src={potraitR}
              alt="portrait"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
       
        
        

        
      </div>
    </>
  );  
};

export default Portfolio;


// <div className="grid-container">
//           <div className="grid">
//             {Array.from({ length: 12 }).map((_, i) => (
//               <div className="column" key={i} data-index={i + 1}></div>
//             ))}
//           </div>
//         </div>




        // <div className="Port-right">          
          
        //   <div className="Coder-left">
        //     <motion.h1
        //       initial={{ y: 50, opacity: 0 }}
        //       animate={{ y: 0, opacity: 1 }}
        //       transition={{ duration: 1 }}
        //     >
        //       <h1 className={`${arrayWide.className}`}> {'\<CODER\>'}</h1>
        //     </motion.h1>
        //     <p className={`${anonymousPro.className}`}>
        //       Passionate coder,solving one micro problem at a time
        //     </p>
        //   </div>
        //   <div className="image-wrapper-r">
        //     <Image
        //       src={potraitR}
        //       alt="portrait"
        //       layout="fill"
        //       objectFit="contain"
        //     />
        //   </div>
        // </div>

      
        
        // <div className="Port-left">
        //   <div className="image-wrapper-l">
        //     <Image
        //       src={potraitL}
        //       alt="portrait"
        //       layout="fill"
        //       objectFit="contain"
        //     />
        //   </div>
        //   <div className="Design-right">
        //     <h1 className={` ${misto.className}`}>Designer</h1>
        //     <p className={`${anonymousPro.className}`}>
        //       Designer, specialising in creativity,UI and Design systems
        //     </p>
        //   </div>
        // </div>

       
        
        
