import React from 'react'
import { SwiperBanner } from '..'

const Header = () => {

  const headerBanner = [
    {
      src: '/image/banner.png',
      alt: "Header image",
      id: 0
    },
    {
      src: '/image/card-image.png',
      alt: "Header image",
      id: 1
    },
    {
      src: '/image/card-image.png',
      alt: "Header image",
      id: 1
    },
    {
      src: '/image/card-image.png',
      alt: "Header image",
      id: 1
    },
  ]


  return (
    <div className={'w-full h-[50vh]'}>
      <SwiperBanner list={headerBanner} banner/>
    </div>
  )
}

export default Header