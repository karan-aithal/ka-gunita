import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import localFont from 'next/font/local';

const arrayWide = localFont({
  src: [
    {
      path: '../../../public/fonts/Array-Wide.otf',
      weight: '400',
      style: 'normal',
    },
  ],
})

//const hoverBtn = document.getElementsByClassName("nav-link");   // check this out !!

//let ripples = document.createElement("span");

// class HoverLink {
//   // declare properties in class before loading it with contructor

//   el: HTMLElement;
//   hover: boolean;
//   x!: number;
//   y!: number;
//   width!: number;
//   height!: number;

//   constructor(el: HTMLElement) {
//     this.el = el;
//     this.hover = false;
//     this.calculatePosition();
//     this.attachEventsListener();
//   }

//   attachEventsListener() {
//     window.addEventListener("mousemove", (e) => this.onMouseMove(e));
//     window.addEventListener("resize", () => this.calculatePosition());
//   }

//   calculatePosition() {
//     gsap.set(this.el, {
//       x: 0,
//       y: 0,
//       scale: 1,
//     });
//     const box = this.el.getBoundingClientRect();
//     this.x = box.left + box.width * 0.5;
//     this.y = box.top + box.height * 0.5;
//     this.width = box.width;
//     this.height = box.height;
//   }

//   onMouseMove(e: MouseEvent) {
//     let hover = false;
//     let hoverArea = this.hover ? 0.7 : 0.5;
//     let x = e.clientX - this.x;
//     let y = e.clientY - this.y;
//     let distance = Math.sqrt(x * x + y * y);
//     if (distance < this.width * hoverArea) {
//       hover = true;
//       if (!this.hover) {
//         this.hover = true;
//       }
//       this.onHover(e.clientX, e.clientY);
//     }

//     if (!hover && this.hover) {
//       this.onLeave();
//       this.hover = false;
//     }
//   }

//   onHover(x: number, y: number) {
//     gsap.to(this.el, {
//       x: (x - this.x) * 0.4,
//       y: (y - this.y) * 0.4,
//       scale: 1.15,
//       ease: "power2.out",
//       duration: 0.4,
//     });

//     if (this.el instanceof HTMLElement) {
//       this.el.style.zIndex = "10";
//     }
//   }

//   onLeave() {
//     gsap.to(this.el, {
//       x: 0,
//       y: 0,
//       scale: 1,
//       ease: "elastic.out(1.2, 0.4)",
//       duration: 0.7,
//     });
//     if (this.el instanceof HTMLElement) {
//       this.el.style.zIndex = "1";
//     }
//   }
// }

// const link1 = document.querySelector("nav-link:nth-child(1)");

// const link2 = document.querySelector("li:nth-child(2) button");

// const link3 = document.querySelector("li:nth-child(3) button");

// if (
//   link1 instanceof HTMLElement &&
//   link2 instanceof HTMLElement &&
//   link3 instanceof HTMLElement
// ) {
//   new HoverLink(link1);
//   new HoverLink(link2);
//   new HoverLink(link3);
// } 
// else {
//   console.error("Element not found or not an HTMLElement.");
// }

const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`navbar-nav ${arrayWide.className}`}>
      <nav>
        <Link href="/" className="nav-link">
          Home
        </Link>
        <Link href="/about" className="nav-link">
          About
        </Link>

        <div className="nav-dropdown">
          <Link href="/services" className="nav-link-dropdown">
            Services
            {/* <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg> */}
          </Link>
          <div className="dropdown-items">
            <ul>
              <li>
                <Link href="/services/service1" className="nav-link-item">
                  Service 1
                </Link>
              </li>
              <li>
                <Link href="/services/service2" className="nav-link-item">
                  Service 2
                </Link>
              </li>
              <li>
                <Link href="/services/service3" className="nav-link-item">
                  Service 3
                </Link>
              </li>
            </ul>
          </div>
        </div>


        <Link href="/login" className="nav-link">
          Login/Signup
        </Link>

        <div className="wrapper">
          <input type="checkbox" name="checkbox" className="switch" />


          {/* <button onClick={toggleMode}>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button> */}
        </div>

      </nav>
    </div>

    // {/* <Link href = "/" className= 'nav-item'>Home</Link>
    // <Link href = "/" className=' text-[#0c2438] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] hover:text-[#FDD726] font-semibold text-3xl'>About</Link>
    // <Link href = "/" className=' text-[#0c2438] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] hover:text-[#427E93] font-semibold text-3xl'>Catalog</Link>
    // <Link href = "/" className=' text-[#0c2438] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] hover:text-[#4156A1] font-semibold text-3xl'>Contact</Link>
    //  */}
  );
};

export default Nav;
