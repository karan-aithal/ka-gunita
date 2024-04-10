import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../styles/globals.scss";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ka-Gunita ",
  description: "Shop in App",
};
 // ENCOMPASSES THE ENTIRE APP
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta charSet="utf-8"></meta>
       <title></title>
       {/* <link href="style.css" rel="stylesheet" /> */}
       <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r123/three.min.js"strategy="beforeInteractive"/>
       <Script type="module" src="https://cdn.jsdelivr.net/npm/vanta@0.5.24/src/vanta.fog.js"/>
      </head>
      {/* BODY ENCOMPASSES THE ENITRE APP */}
      {/* Set Background Color to Root element of app and set scroll x,y axis overflow conditions */}

      <body className={`${inter.className} bg-[#030014]  h-full`}>
        
        {children}
      
      </body>  


    </html>
  );
}
