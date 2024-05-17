import { BottomNav, Footer, Navbar, TopNav } from '@/components'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='relative '>
      <TopNav/>
      <Navbar/>
      <BottomNav/>
      <div className={'h-[calc(100vh - 88px)] bg-white'}>
        {
          children
        }
      </div>
      <Footer/>
    </div>
  )
}

export default Layout