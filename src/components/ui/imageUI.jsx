import Image from 'next/image'
import { useState } from 'react'

const ImageUI = ({src , alt , imgStyle ,priority , objectFitContain}) => {

    const [loading , setLoading] = useState(true)

    return (
        <>
            <Image
                src={src}
                alt={alt}
                fill={true}

                sizes="(max-width: 768px) 110vw, (max-width: 1200px) 70vw, 60vw"
                className={` ${objectFitContain ? 'object-contain' : 'object-cover'}  w-full h-full  ${imgStyle} duration-200 ease-in-out  ${
                    loading ? 'scale-110 blur-2xl grayscale':
                        'scale-100  blur-0 grayscale-0'
                } `}
                priority={priority || false}
                onLoad={() => setLoading(false)}
            />
        </>
    )
}

export default ImageUI