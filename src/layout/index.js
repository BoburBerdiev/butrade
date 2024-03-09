import { Footer, Navbar } from '@/components'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='relative '>
      <Navbar/>
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