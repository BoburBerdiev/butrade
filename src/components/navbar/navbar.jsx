import React from 'react'
import { PiShoppingCartSimple } from "react-icons/pi";
import { CgSearch } from "react-icons/cg";
import { SlPhone } from "react-icons/sl";
import { DropdownUI, ImageUI } from '..'
import Link from 'next/link';
import {useSelector} from "react-redux";
import {SearchPanel} from "@/components";

const linksList = [
  {
    name: "Металлопрокат",
    id: 0,
    href: '/'
  },
  {
    name: "Трубы",
    id: 1,
    href: '/'
  },
  {
    name: "Отделочные материалы",
    id: 2,
    href: '/'
  },
  {
    name: "Кладочные материалы",
    id: 3,
    href: '/'
  },
  {
    name: "Сухие строительные смеси",
    id: 4,
    href: '/'
  },
  {
    name: "Сыпучие материалы",
    id: 5,
    href: '/'
  },
  {
    name: "Изолирующие материалы",
    id: 6,
    href: '/'
  },
  {
    name: "Прочие",
    id: 7,
    href: '/'
  },

]
const Navbar = () => {
    const {allCount} = useSelector(state => state.basketSlice)

  return (
    <>
      <nav className=' font-notoSansDisplay py-4 md:py-5 border-b border-[#CECFDB] bg-white relative z-[1000]'>
      <div className="container">
        <div className='flex items-center flex-wrap gap-y-4 md:flex-nowrap justify-between'>
          <div className='max-md:w-full flex items-center justify-between'>
            <a href="tel:+998901110111" className='block md:hidden'>
              <SlPhone className=' text-currentBlue w-5 h-5'/>
            </a>
            <a href="/" className='w-[102px] relative block h-5 md:w-[120px] md:h-7 xl:w-[162px] xl:h-[51px]'>
              <ImageUI src={'/image/logo.png'} alt={'Butrate Logo'} objectFitContain/>
            </a>
            <p className='text-currentBlue md:hidden'>Ру</p>
          </div>
          <div className={'md:mx-5 lg:mx-10 xl:mx-12 w-full '}>
            <SearchPanel/>
          </div>
          <div className='hidden md:flex items-center gap-5 xl:gap-10 text-currentBlue'>
            <Link href={'/basket'} className='flex flex-col items-center '>
              <div className='relative '>
                <PiShoppingCartSimple className=' text-currentBlue w-6 h-6 lg:w-7 lg:h-7'/>      
                <span className='lg:px-1.5 px-1 py-0.5 rounded-full bg-currentBlue text-white absolute -top-2 -right-1.5 text-[7px] lg:text-[9px]'>{allCount}</span>
              </div>
              <span className=' text-sm '>Корзина</span>
            </Link>
            <a href='tel:+998901110111' className='flex flex-col items-center '>
              <div className='relative '>
                <SlPhone className=' text-currentBlue w-6 h-6 lg:w-7 lg:h-7'/>      
              </div>
              <span className=' text-sm '>Звонок</span>
            </a>
          </div>
        </div>
      </div>
      </nav>
      <div className='max-md:hidden py-4 lg:py-5 bg-white font-notoSansDisplay font-semibold text-sm border-b'>
        <div className="container w-full overflow-x-hidden">
          <div className={'flex gap-3 overflow-x-scroll w-[2000px]'}>
             {
               linksList.map(link => (
                 <a key={link.id} href={link.href}>{link.name}</a>
               ))
             }
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar