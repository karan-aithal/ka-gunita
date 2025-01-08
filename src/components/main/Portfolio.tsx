import React from 'react'
import potraitL from "../../../public/Karan 1_LE_upscale_magic_x4_strength_75_similarity_100.png"
import potraitR from "../../../public/DSC04980Transp.png"

import Image from 'next/image';


document.querySelectorAll('.grid .column').forEach(column => {
    column.addEventListener('mouseover', () => {
        const leftImage = document.querySelector('.Port-left .image-wrapper') as HTMLElement;
        const rightImage = document.querySelector('.Port-right .image-wrapper') as HTMLElement;

        if (leftImage) {
            leftImage.style.transform = 'scale(1.1)';
        }

        if (rightImage) {
            rightImage.style.transform = 'scale(1.1)';
        }
    });

    column.addEventListener('mouseout', () => {
        const leftImage = document.querySelector('.Port-left .image-wrapper') as HTMLElement;
        const rightImage = document.querySelector('.Port-right .image-wrapper') as HTMLElement;

        if (leftImage) {
            leftImage.style.transform = 'scale(1)';
        }

        if (rightImage) {
            rightImage.style.transform = 'scale(1)';
        }
    });
});



// document.addEventListener("DOMContentLoaded", () => {
//     const leftPortrait = document.querySelector(".Port-left") as HTMLElement;
//     const rightPortrait = document.querySelector(".Port-right") as HTMLElement;
//     const columns = document.querySelectorAll(".grid .column");

//     columns.forEach((column) => {
//         column.addEventListener("mouseenter", (event) => {
//             const target = event.target as HTMLElement;

//             if (target && target.dataset.index) {
//                 const index = parseInt(target.dataset.index, 10);
//                 const isLeft = index <= 6; // First 6 columns for left portrait

//                 if (index <= 6) {
//                     // Adjust for the left portrait
//                     const intensity = (6 - index) / 6; // Closer to center -> higher intensity
//                     leftPortrait.style.opacity = (0.5 + intensity * 0.5).toString();
//                     leftPortrait.style.clipPath = `inset(0 ${50 - intensity * 50}% 0 0)`;

//                     rightPortrait.style.opacity = "0.5";
//                     rightPortrait.style.clipPath = "inset(0 0 0 50%)";
//                 } else {
//                     // Adjust for the right portrait
//                     const intensity = (index - 6) / 6; // Closer to center -> higher intensity
//                     rightPortrait.style.opacity = (0.5 + intensity * 0.5).toString();
//                     rightPortrait.style.clipPath = `inset(0 0 0 ${50 - intensity * 50}%)`;

//                     leftPortrait.style.opacity = "0.5";
//                     leftPortrait.style.clipPath = "inset(0 50% 0 0)";
//                 }
//             }
//         });
//     });

//     document.body.addEventListener("mouseleave", () => {
//         leftPortrait.style.opacity = "0.5";
//         leftPortrait.style.clipPath = "inset(0 50% 0 0)";

//         rightPortrait.style.opacity = "0.5";
//         rightPortrait.style.clipPath = "inset(0 0 0 50%)";
//     });
// });







const Portfolio = () => {
    return (
        <>
            <div className="container">
                <div className="Port-right">
                    <div className="image-wrapper">
                        <Image src={potraitR} alt="portrait" layout="fill" objectFit="contain" />
                    </div>
                </div>
                <div className="Port-left">
                    <div className="image-wrapper">
                        <Image src={potraitL} alt="portrait" layout="fill" objectFit="contain" />
                    </div>
                </div>

                <div className="grid-container">
                    <div className="grid">
                        {Array.from({ length: 12 }).map((_, i) => (
                            <div className="column" key={i} data-index={i + 1}></div>
                        ))}
                    </div>
                </div>
            </div>
        </>



    )
};

export default Portfolio;

