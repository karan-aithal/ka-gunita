import React from 'react'
import potraitL from "../../../public/Karan 1_LE_upscale_magic_x4_strength_75_similarity_100.png"
import potraitR from "../../../public/DSC04980Transp.png"

import Image from 'next/image'

// const portLeft = document.querySelector('.Port-left');
// const portRight = document.querySelector('.Port-right');

// if (portLeft && portRight) {
//     portLeft.addEventListener('mouseenter', () => {
//         portLeft.style.filter = 'none';
//         portRight.style.filter = 'blur(5px)';
//     });
//   } else {
//     console.error("Element with class 'left-half' not found.");
//   }

const grid = document.querySelector('.grid');

// Dynamically create 12 columns
for (let i = 0; i < 12; i++) {
    const column = document.createElement('div');
    column.classList.add('column');
    column.dataset.side = i < 6 ? 'left' : 'right'; // First 6 columns are "left", last 6 are "right"
    if (grid) grid.appendChild(column);
}

// Add hover effects

if (grid)
    grid.addEventListener('mouseover', (e) => {
        const target = e.target as HTMLElement; // Explicitly cast e.target to HTMLElement
        if (target && target.classList.contains('column')) {
            const side = target.dataset.side; // Access dataset safely
            const potraitL = document.querySelector('.portrait1') as HTMLElement;
            const potraitR = document.querySelector('.portrait2') as HTMLElement;

            if (side === 'left') {
                potraitL.style.opacity = '1';
                potraitL.style.filter = 'blur(0px)';
                potraitR.style.opacity = '0.3';
                potraitR.style.filter = 'blur(5px)';
            } else if (side === 'right') {
                potraitL.style.opacity = '0.3';
                potraitL.style.filter = 'blur(5px)';
                potraitR.style.opacity = '1';
                potraitR.style.filter = 'blur(0px)';
            }
        }
    });




const Portfolio = () => {
    return (

        <>
            <div className="Port-left">
                <div className="image-wrapper">
                    <Image src={potraitL} alt="portrait" layout="fill" objectFit="cover" />
                </div>
            </div>
            <div className="Port-right">
                <div className="image-wrapper">
                    <Image src={potraitR} alt="portrait" layout="fill" objectFit="cover" />
                </div>
            </div>
        </>



    )
}

export default Portfolio
