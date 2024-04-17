import React from "react";
import { useState , useEffect , useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { Lato } from 'next/font/google'
 
const lato = Lato({
  subsets: ['latin'],
  weight: '900',
  variable: '--font-lato',
})

const HoverLink = ({ to, className, text }: { to: string; className: string; text: string}) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [hover, setHover] = useState(false);

  let x = 0;
  let y = 0;
  let width = 0;
  let height = 0;

  const calculatePosition = () => {
    gsap.set(linkRef.current, {
      x: 0,
      y: 0,
      scale: 1,
    });
    const box = linkRef.current?.getBoundingClientRect();
    if(box){
      x = box.left + box.width * 0.5;
      y = box.top + box.height * 0.5;
      width = box.width;
      height = box.height;
    }
    
  };

  const onMouseMove = (e: MouseEvent) => {
    let newHover = false;
    const hoverArea = hover ? 0.7 : 0.5;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const distance = Math.sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2);

    if (distance < width * hoverArea) {
      newHover = true;
      if (!hover) {
        setHover(true);
      }
      onHover(mouseX, mouseY);
    }

    if (!newHover && hover) {
      onLeave();
      setHover(false);
    }
  };

  const onHover = (mouseX: number, mouseY: number) => {
    gsap.to(linkRef.current, {
      x: (mouseX - x) * 0.4,
      y: (mouseY - y) * 0.4,
      scale: 1.15,
      ease: "power2.out",
      duration: 0.4,
    });
    if (linkRef.current && linkRef.current.style) {
      linkRef.current.style.zIndex = '10';
    }
  };

  const onLeave = () => {
    gsap.to(linkRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      ease: "elastic.out(1.2, 0.4)",
      duration: 0.7,
    });

    if (linkRef.current && linkRef.current.style) {
      linkRef.current.style.zIndex = '1';
    }
  };

  useEffect(() => {
    const linkElement = linkRef.current;
    if(linkRef.current){
      
      calculatePosition();
      linkRef.current.addEventListener('mousemove', onMouseMove);
      window.addEventListener('resize', calculatePosition);

        return () => {
          linkElement?.removeEventListener('mousemove', onMouseMove);
          window.removeEventListener('resize', calculatePosition);     
      };
    }
    
  },);

  return (
    <Link href ={to} className={`${lato.className} mx-10 box-content`} ref={linkRef}>
      {text}
    </Link>
  );
  
};
// class HoverLink {      // declare properties in class before loading it with contructor
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

//   destroy() {
//     window.removeEventListener("mousemove", this.onMouseMove);
//     window.removeEventListener("resize", this.calculatePosition);
//   }

  
//   useEffect(() => {
//     const linkElement = document.querySelector('.hover-link');

//     if (linkElement instanceof HTMLElement) {
//       const hoverLink = new HoverLink(linkElement);
//       return () => {
//         hoverLink.destroy();
//       };
//     }    
//   }, []);
// }

// const link1 = document.querySelector(".navbar-nav:nth-child(1)");

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

  // { to, children }: { to: string; children: React.ReactNode }
  return (
    <>
        <div className="navbar-nav hidden md:flex space-x-14 text-2xl text-white">
          <HoverLink to="/" className="hover-link" text="Home"></HoverLink>
          <HoverLink to="/about" className="hover-link" text="About"></HoverLink>
          <HoverLink to="/services" className="hover-link" text="Services"></HoverLink>
          <HoverLink to="/login" className="hover-link" text="Login/Signup"></HoverLink> 
          </div>
          <div className="nav-toggle flex items-center">
          <button onClick={toggleMode}>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
        </>

    // {/* <Link href = "/" className= 'nav-item'>Home</Link>
    // <Link href = "/" className=' text-[#0c2438] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] hover:text-[#FDD726] font-semibold text-3xl'>About</Link>
    // <Link href = "/" className=' text-[#0c2438] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] hover:text-[#427E93] font-semibold text-3xl'>Catalog</Link>
    // <Link href = "/" className=' text-[#0c2438] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] hover:text-[#4156A1] font-semibold text-3xl'>Contact</Link>
    //  */}
  );
};

export default Nav;
