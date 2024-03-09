import React from 'react'
import { ImageUI } from '..'

const Navbar = () => {
  return (
    <nav className=' font-notoSansDisplay'>
      <div className="container">
        <div className='flex items-center flex-wrap justify-between'>
          <a href="#" className='w-[102px] relative block h-5 md:w-[120px] md:h-7 xl:w-[162px] xl:h-[51px]'>
            <ImageUI src={'/image/logo.png'} alt={'Butrate Logo'} objectFitContain/>
          </a>
          <div className=''>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar