import React from 'react'
import { SwiperBanner } from '..'

const Header = ({banner}) => {

  return (
    <div className={'w-full h-[50vh]'}>
      <SwiperBanner list={banner}/>
    </div>
  )
}

export default Header