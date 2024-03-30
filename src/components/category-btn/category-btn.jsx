import React from 'react'
import { ImageUI } from '..'

const CategoryBtn = ({onClick, image, title}) => {
  return (
    <div className='flex items-center relative lg:gap-4 gap-2 px-2.5 py-3 md:px-5 md:py-4 xl:py-[22px] lg:px-7 xl:px-10 bg-white rounded-lg shadow-categoryCard cursor-pointer' onClick={onClick}>
      <div className='w-[26px] aspect-square relative md:w-7 lg:w-10 xl:w-11 shrink-0'>
        <ImageUI src={image} alt={'Category Butrate'} objectFitContain/>
      </div>
      <h3 className='text-xs font-notoSans leading-4 line-clamp-2 md:text-sm lg:text-base lg:leading-[22px]'>{title}</h3>
      <div className='w-3 aspect-square rounded-full bg-[#0A1149B3] shrink-0 absolute top-[26px] left-[22px] md:w-4 md:top-9 md:left-8 lg:w-5 lg:top-10 lg:left-11 xl:top-11 xl:left-14'></div>
    </div>
  )
}

export default CategoryBtn