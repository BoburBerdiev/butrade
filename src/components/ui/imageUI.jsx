import Image from 'next/image'
import {useState} from 'react'

const ImageUI = ({src, alt, imgStyle, priority = false, objectFitContain, width, height,unoptimized=false}) => {

    const [loading , setLoading] = useState(true)

    return (
        <>
            {
                (width && height) ?

                    <Image
                        src={src}
                        alt={alt}
                        width={width}
                        height={height}
                        className={` ${objectFitContain ? 'object-contain' : 'object-cover'}  w-full h-full  ${imgStyle} duration-200 ease-in-out  ${
                            loading ? 'scale-110 blur-2xl grayscale' :
                                'scale-100  blur-0 grayscale-0'
                        } `}

                        onLoad={() => setLoading(false)}
                    />
                    :
                    <Image
                        src={src}
                        alt={alt}
                        fill={true}
                        className={` ${objectFitContain ? 'object-contain' : 'object-cover'}  w-full h-full  ${imgStyle} duration-200 ease-in-out  ${
                            loading ? 'scale-110 blur-2xl grayscale' :
                                'scale-100  blur-0 grayscale-0'
                        } `}
                        unoptimized={unoptimized}
                        priority={priority}
                        onLoad={() => setLoading(false)}
                    />
            }

        </>
    )
}

export default ImageUI