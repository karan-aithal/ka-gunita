// "use client";
// import { useEffect, useRef } from "react";
// import { usePathname } from "next/navigation";
// import { motion } from "framer-motion";
// import LocomotiveScroll from "locomotive-scroll";
// import dynamic from 'next/dynamic';


// function Layout({ children }: { children: React.ReactNode }) {
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const pathname = usePathname();

//   useEffect(() => {
//     // Ensure this code only runs on the client side
//     if (typeof window !== 'undefined' && containerRef.current) {
//       // Dynamically import LocomotiveScroll to avoid SSR issues
//       import('locomotive-scroll').then((LocomotiveScrollModule) => {
//         const LocomotiveScroll = LocomotiveScrollModule.default;

//         const scroll = new LocomotiveScroll({
//           el: containerRef.current || undefined,
//           smooth: true,
//         });

//         // Cleanup function to destroy the scroll instance
//         return () => {
//           if (scroll && typeof scroll.destroy === 'function') {
//             scroll.destroy();
//           }
//         };
//       });
//     }
//   }, [pathname]); // Reinitialize scroll when the pathname changes
    
//     return (
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.5 }}
//         ref={containerRef}
//         data-scroll-container
//       >
//         {children}
//       </motion.div>
//     );
//   }





// // Use next/dynamic to disable SSR for this component
// // Use next/dynamic to disable SSR for the Layout component

// export default dynamic(() => Promise.resolve(Layout), { ssr: false });