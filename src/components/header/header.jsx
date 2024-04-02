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
      src: '/image/image 1.png',
      alt: "Header image",
      id: 1
    },
  ]


  return (
    <div>
      <SwiperBanner list={headerBanner}/>
    </div>
  )
}

export default Header