import React from 'react'
import { SwiperBanner } from '..'

const Header = ({banner}) => {

  return (
    <header className={'w-full h-[60vh]'}>
      <SwiperBanner list={banner}/>
    </header>
  )
}

export default Header