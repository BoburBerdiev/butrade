import { BottomNav, Footer, Navbar, TopNav } from '@/components'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='relative '>
      <TopNav/>
      <Navbar/>
      <BottomNav/>
      <main>
        {
          children
        }
      </main>
      <Footer/>
    </div>
  )
}

export default Layout