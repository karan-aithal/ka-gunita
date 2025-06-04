import React from 'react'

import Image from 'next/image';

import Mountain from "../../../public/IMG_2819 (copy).png"

const Section2 = () => {
    return (
        <section className='section2'>
            {/* <div>Section2</div> */}
            <div className="mount-image">
                <Image src={Mountain} alt="portrait" layout="fill" objectFit="cover" />
            </div>
        </section>

    )
}

export default Section2